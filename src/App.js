import { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';

function App() {
  return (
    <>
      <h1>Here goes the NavBar component</h1>

      <Switch>
        <Route extact path="/" component={HomePage}/>
      </Switch>
    </>
  );
}

export default App;
