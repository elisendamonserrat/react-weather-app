import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import ForecastCard from '../components/ForecastCard';


export class FavouritesPage extends Component {
    render() {
        console.log(this.props.favouritesList)
        const { favouritesList } = this.props;
        return (
            <>
                <Navbar />
                <main className="w-11/12 max-w-screen-sm mx-auto text-center my-4 flex flex-col items-center">
                    {favouritesList.map((favourite, index) => {
                        return < ForecastCard key={index} locationWeather={favourite} />
                    })}
                    
                </main>
            </>
        )
    }
}

export default FavouritesPage
