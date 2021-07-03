import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar';
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
        console.log(favouritesList)
        return (
            <>
                <Navbar />
                <main className="w-11/12 max-w-screen-sm mx-auto text-center flex flex-col items-center">
                    {!favouritesList.length && 
                     <div className="w-11/12 max-w-screen-sm mx-auto text-center my-16 flex flex-col items-center">
                        <p className="font-semibold text-xl mb-8">Seems like you don't have any favourites yet. 
                        <br></br> 
                        Select your preferred cities and check them here!</p>
                        <img  className="w-2/5" src="/img/idea.png" alt="page not found" />
                        <Link to="/">
                            <button
                                className="px-4 py-2 mt-8 border rounded-lg bg-yellow-300 rounded-lg font-bold uppercase"
                            >
                              Go to Home Page
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
                </main>
            </>
        )
    }
}

export default FavouritesPage
