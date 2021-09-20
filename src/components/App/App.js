import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../index.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </Route>
        <Route path="/movies">
          <Header></Header>
          <Movies></Movies>
          <Footer></Footer>
        </Route>
        <Route path="/saved-movies">
          <Header></Header>
          <SavedMovies></SavedMovies>
          <Footer></Footer>
        </Route>
        <Route path="/profile">
          <Header></Header>
          <Profile></Profile>
        </Route>
        <Route path="/signin">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <Register></Register>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
