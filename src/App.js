import { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import FavouritesPage from './views/FavouritesPage';
import NotFoundPage from './views/NotFoundPage';

function App() {
  return (
    <>
      <h1>Here goes the NavBar component</h1>

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/favourites" component={FavouritesPage}/>
        <Route path="/404"component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
