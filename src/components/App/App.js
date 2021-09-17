import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../index.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies'

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/movies">
          <Movies></Movies>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies></SavedMovies>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/signin">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <Register></Register>
        </Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
