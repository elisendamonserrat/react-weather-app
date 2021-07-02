import React, { Component } from 'react'
import { currentDate, mathRoundTemperature } from '../helpers'

export class ForecastCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favourites: [],

        }
    }

    addToFavourites = () => {
        const favouritesCopy = [...this.state.favourites];
        const { locationWeather } = this.props;

        favouritesCopy.push(locationWeather);

        this.setState({
            favourites: favouritesCopy,
        })

    }


    render() {
        const { locationWeather } = this.props;


        return (
            <div className="border my-8 flex flex-col items-center py-4 rounded-md w-11/12 max-w-sm">
                <button className="self-end mx-8" onClick={this.addToFavourites}>🤍</button>
                <h1 className="text-3xl">{locationWeather.name}</h1>
                <p className="text-base text-gray-400 font-semibold">{currentDate()}</p>
                <p className="text-gray-500 font-semibold text-xl mt-6">{locationWeather.weather[0].main}, {locationWeather.weather[0].description}</p>
                <div className="flex flex-col items-center">
                    <img src={`http://openweathermap.org/img/wn/${locationWeather.weather[0].icon}@4x.png`} alt={`weather in ${locationWeather.name}`} />
                </div>
                <div className="border p-4 rounded-md flex items-center justify-between w-11/12">
                    <p className="text-lg text-gray-400 font-semibold">Min {mathRoundTemperature(locationWeather.main.temp_min)}°</p>
                    <p className="font-bold text-5xl">{mathRoundTemperature(locationWeather.main.temp)}°</p>
                    <p className="text-lg text-gray-400 font-semibold">Max {mathRoundTemperature(locationWeather.main.temp_max)}°</p>
                </div>
            </div>

        )

    }
}


export default ForecastCard
