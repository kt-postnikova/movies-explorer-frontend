import React from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import '../../index.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute';
import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function App() {
  const [message, setMessage] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);

  const history = useHistory();

  /* Регистрация пользователя */
  function handleRegisterSubmit(email, password, name) {
    MainApi.register(email, password, name)
      .then((res) => {
        setMessage(res.message);
        setTimeout(() => {
          history.push('/signin');
          setMessage('');
        }, 1000)
      })
      .catch((err) => {
        if (err === 'Ошибка 409') {
          setMessage('Пользователь с таким email уже существует!');
        }
      })
  }

  /* Авторизация пользователя */
  function handleAuthSubmit(password, email) {
    MainApi.authorize(password, email)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', JSON.stringify(res.token))
          setLoggedIn(true);
        }
        setTimeout(() => {
          history.push('/movies');
          setMessage('');
        }, 1000)
      })
      .catch((err) => {
        if (err === 'Ошибка 401') {
          setMessage('Неверно указан email или пароль!');
        }
      })
  }

  /* Проверка токена и изменение состояния на "авторизованного пользователя" */
  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }

  /* Изменение состояния на "неавторизованного пользователя", выход из приложения */
  function signOut(params) {
    localStorage.removeItem("token");
    localStorage.removeItem('movies');
    localStorage.removeItem('query');
    history.push('/');
    setLoggedIn(false);
  }

  /* Редактирование данных пользователя */
  function handleEditUserInfo(userInfo) {
    MainApi.editUserInfo(userInfo)
      .then((res) => {
        setMessage(res.message);
        setCurrentUser(Object.assign(currentUser, userInfo));
      })
      .catch((err) => console.log(err))
  }

  /* Добавление в сохраненные фильмы */
  function handleSaveMovies(movie) {
    MainApi.saveMovie(movie)
      .then((selectedMovie) => {
        setSavedMovies([selectedMovie.movie, ...savedMovies])
      })
      .catch((err) => console.log(err))
  }

  /* Удаление из сохраненных фильмов */
  function handleDeleteMovies(movie) {
    const savedMovie = savedMovies.find((item) => {
      if (item._id === movie._id) {
        return item
      } else {
        return savedMovies
      }
    })
    MainApi.deleteMovie(savedMovie._id)
      .then((res) => {
        const newMoviesList = savedMovies.filter((item) => {
          if (movie._id === item._id) {
            return false
          } else {
            return true
          }
        })
        setSavedMovies(newMoviesList)
      })
      .catch((err) => console.log(err))
  }

  /* Хук проверки состояния авторизованности пользователя */
  React.useEffect(() => {
    tokenCheck()
  }, [])

  /* Хук получения данных пользователя, если залогинен */
  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getContent()
        .then((res) => {
          console.log(res);
          setCurrentUser(res)
        })
    }
  }, [loggedIn])

  /* Хук получения массива сохраненных фильмов */
  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getSavedMovies()
        .then((res) => {
          setSavedMovies(res.data);
        })
    }
  }, [loggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          {loggedIn ? (<Redirect to="/movies" />) : (<Redirect to="/" />)}
          <Main loggedIn={loggedIn}></Main>
          <Footer></Footer>
        </Route>
        <ProtectedRoute
          path="/movies"
          savedMovies={savedMovies}
          loggedIn={loggedIn}
          onSave={handleSaveMovies}
          onDelete={handleDeleteMovies}
          component={Movies}>
        </ProtectedRoute>
        <ProtectedRoute
          path="/saved-movies"
          savedMovies={savedMovies}
          onDelete={handleDeleteMovies}
          loggedIn={loggedIn}
          component={SavedMovies}>
        </ProtectedRoute>
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          onEditProfile={handleEditUserInfo}
          onSignOut={signOut}
          message={message}>
        </ProtectedRoute>
        <Route path="/signin">
          <Login onLogin={handleAuthSubmit} message={message}></Login>
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegisterSubmit} message={message}></Register>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider >
  );
}

export default App;
