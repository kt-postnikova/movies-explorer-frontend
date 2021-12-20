import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import '../../index.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';
import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [message, setMessage] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [error, setError] = React.useState('');

  const history = useHistory();

  /* Регистрация пользователя */
  function handleRegisterSubmit(email, password, name) {
    MainApi.register(email, password, name)
      .then((res) => {
        setMessage(res.message);
        setError('');
        setTimeout(() => {
          localStorage.setItem('token', JSON.stringify(res.token))
          setLoggedIn(true);
          history.push('/movies');
          setMessage('');
        }, 1000)
      })
      .catch((err) => {
        if (err === 'Ошибка 409') {
          setMessage('Пользователь с таким email уже существует!');
          setError(err);
          setTimeout(() => {
            setMessage('');
          }, 2000)
        } else if (err === 'Ошибка 400') {
          setMessage('Неверно указан email или пароль!');
        }
      })
  }

  /* Авторизация пользователя */
  function handleAuthSubmit(password, email) {
    MainApi.authorize(password, email)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', JSON.stringify(res.token));
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
          setError(err);
          setTimeout(() => {
            setMessage('');
          }, 2000)
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
        setTimeout(() => {
          setMessage('');
        }, 2000)
      })
      .catch((err) => console.log(err))
  }

  /* Добавление в сохраненные фильмы */
  function handleSaveMovies(movie) {
    MainApi.saveMovie(movie)
      .then((selectedMovie) => {
        setSavedMovies([selectedMovie.movie, ...savedMovies]);
      })
      .catch((err) => console.log(err))
  }

  /* Удаление из сохраненных фильмов */
  function handleDeleteMovies(movie) {
    const savedMovie = savedMovies.find((item) => item.id === movie.id);
    MainApi.deleteMovie(savedMovie._id)
      .then((res) => {
        const newMoviesList = savedMovies.filter((item) => savedMovie._id !== item._id);
        setSavedMovies(newMoviesList);
      })
      .catch((err) => console.log(err))
  }

  /* Хук проверки состояния авторизованности пользователя */
  React.useEffect(() => {
    tokenCheck();
  }, [])

  /* Хук получения данных пользователя, если залогинен */
  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getContent()
        .then((res) => {
          setCurrentUser(res);
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
          <Main loggedIn={loggedIn}></Main>
          <Footer></Footer>
        </Route>
        <Route path="/movies">
          <Movies
            savedMovies={savedMovies}
            loggedIn={loggedIn}
            onSave={handleSaveMovies}
            onDelete={handleDeleteMovies}>
          </Movies>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            savedMovies={savedMovies}
            onDelete={handleDeleteMovies}
            loggedIn={loggedIn}>
          </SavedMovies>
        </Route>
        <Route path="/profile">
          <Profile
            loggedIn={loggedIn}
            onEditProfile={handleEditUserInfo}
            onSignOut={signOut}
            message={message}>
          </Profile>
        </Route>
        <Route path="/signin">
          {loggedIn && <Redirect to="/movies"></Redirect>}
          <Login onLogin={handleAuthSubmit} message={message} error={error}></Login>
        </Route>
        <Route path="/signup">
          {loggedIn && <Redirect to="/movies"></Redirect>}
          <Register onRegister={handleRegisterSubmit} message={message} error={error}></Register>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider >
  );
}

export default App;
