import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './views/HomePage';
import FavouritesPage from './views/FavouritesPage';
import NotFoundPage from './views/NotFoundPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/favourites" component={FavouritesPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

export default App;
