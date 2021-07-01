import React, { Component } from 'react'

export class ForecastCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavourite: false,
        }
    }
   
    mathRoundTemperature = (temperature) => {
        return Math.round(temperature);
    }
    
    currentDate = () => {
        const month = [];
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        const today = new Date();
        const date = `${today.getDate()} of ${month[today.getMonth()]}`;
        return date
    }

    handleNewFavourite = () => {
        const { locationWeather } = this.props;
        this.props.addNewFavourite(locationWeather)
        this.setState({
            isFavourite: !this.state.isFavourite,
        })
    }

    removeFromFavourites = () => {
        const { locationWeather } = this.props;
        this.props.removeFavourite(locationWeather)
        this.setState({
            isFavourite: !this.state.isFavourite,
        })
    }

    checkIfFavourite = () => {
        const { favouritesList, locationWeather } = this.props;
        const index = favouritesList.findIndex(location => location.name === locationWeather.name);

        if( index === -1 && !this.state.isFavourite) {
            return <button className="self-end mx-8" onClick={this.handleNewFavourite}>🤍</button>
        } else {
            return <button className="self-end mx-8" onClick={this.removeFromFavourites}>❤️</button>
        }
    }

    render() {
        const { locationWeather } = this.props;

        return (
            <div className="border my-8 flex flex-col items-center py-4 rounded-md w-11/12 max-w-sm">
                {this.checkIfFavourite()}
                <h1 className="text-3xl">{locationWeather.name}</h1>
                <p className="text-base text-gray-400 font-semibold">{this.currentDate()}</p>
                <p className="text-gray-500 font-semibold text-xl mt-6">{locationWeather.weather[0].main}, {locationWeather.weather[0].description}</p>
                <div className="flex flex-col items-center">
                        <img src={`http://openweathermap.org/img/wn/${locationWeather.weather[0].icon}@4x.png`}  alt={`weather in ${locationWeather.name}`}/>
                </div>
                <div className="border p-4 rounded-md flex items-center justify-between w-11/12">
                    <p className="text-lg text-gray-400 font-semibold">Min {this.mathRoundTemperature(locationWeather.main.temp_min)}°</p>
                    <p className="font-bold text-5xl">{this.mathRoundTemperature(locationWeather.main.temp)}°</p>
                    <p className="text-lg text-gray-400 font-semibold">Max {this.mathRoundTemperature(locationWeather.main.temp_max)}°</p>
                </div>
           </div>
        )
    }
}

export default ForecastCard
