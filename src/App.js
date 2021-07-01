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

  addToFavourites = (locationObj) => {
    const favouritesLocationsCopy = [...this.state.favouritesLocations];

    const index = favouritesLocationsCopy.findIndex(location => location.name === locationObj.name)

    if (index === -1) {
      favouritesLocationsCopy.push(locationObj);
    } else  {
      throw alert('This location is already in your favourites list')
    }

    this.setState({
      favouritesLocations: favouritesLocationsCopy,
    })
  }

  removeFromFavourites = (locationObj) => {
    const favouritesLocationsCopy = [...this.state.favouritesLocations];

    const filteredFavourites = favouritesLocationsCopy.filter(location => location !== locationObj);
    this.setState({
      favouritesLocations: filteredFavourites,
    })
  }

  render() {
    console.log('App state', this.state.favouritesLocations)
    const { favouritesLocations } = this.state;
    return (
      <>
        <Switch>
          <Route 
            exact path="/" 
            render={() => (
              < HomePage 
                handleNewFavouriteLocation={this.addToFavourites} 
                handleRemoveFavouriteLocation={this.removeFromFavourites}
              />
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
