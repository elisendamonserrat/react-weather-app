import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';

import HomePage from './views/HomePage';
import FavouritesPage from './views/FavouritesPage';
import NotFoundPage from './views/NotFoundPage';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favouritesLocations: [],
    }
  }

  addToFavourites = (location) => {
    const favouritesLocationsCopy = [...this.state.favouritesLocations];
    favouritesLocationsCopy.push(location);

    this.setState({
      favouritesLocations: favouritesLocationsCopy,
    })
  }

  render() {
    console.log(this.state.favouritesLocations)
    const { favouritesLocations } = this.state;
    return (
      <>
        <Switch>
          <Route 
            exact path="/" 
            render={() => (
              < HomePage handleNewFavouriteLocation={this.addToFavourites} />
            )}
          />
          <Route 
            exact path="/favourites" 
            render={() => (
              < FavouritesPage favouritesList={favouritesLocations}/>
            )}
          />
          <Route path="/404"component={NotFoundPage} />
          <Route path="*"component={NotFoundPage} />
  
        </Switch>
      </>
    );

  }
}

export default App;
