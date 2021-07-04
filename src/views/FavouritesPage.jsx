import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ForecastCard from '../components/ForecastCard';


export class FavouritesPage extends Component {
    addNewFavouriteLocation = (location) => {
        this.props.handleNewFavouriteLocation(location);
    }

    removeOneFavouriteLocation = (location) => {
        this.props.handleRemoveFavouriteLocation(location);
    }

    render() {
        const { favouritesList } = this.props;
        return (
            <>
              {!favouritesList.length && 
                <div className="w-11/12 max-w-screen-sm mx-auto text-center my-4 flex flex-col items-center">
                  <h1 className="font-bold text-3xl mb-4">Psst!</h1>
                  <p className="text-lg mb-8">Seems like you don't have any favourites yet.</p>
                    <img  className="w-2/6" src="/img/idea.png" alt="page not found" />
                  <Link to="/">
                      <button
                          style={{color: 'rgba' + '(54, 54, 54, 1)'}}
                          className="px-4 py-2 mt-8 border-none rounded-lg bg-yellow-400 rounded-lg font-bold uppercase"
                      >
                        Go Back
                      </button>
                  </Link>
                </div>
              }
              {favouritesList.map((favourite, index) => {
                  return (
                      <ForecastCard 
                          key={index} 
                          locationWeather={favourite} 
                          addNewFavourite={this.addNewFavouriteLocation}
                          removeFavourite={this.removeOneFavouriteLocation}
                          favouritesList={favouritesList}
                      />
                    )
              })}
            </>
        )
    }
}

export default FavouritesPage
