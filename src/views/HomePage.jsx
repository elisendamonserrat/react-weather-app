import React, { Component } from 'react'
import axios from 'axios'
import ForecastCard from '../components/ForecastCard';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import  { Redirect } from 'react-router-dom'

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Barcelona',
            locationWeather: {},
            status: 'loading',
            error: false,
            isFavourite: false,
        }
    }

    componentDidMount = () => {
        const { location } = this.state;
        const apiKey = process.env.REACT_APP_API_KEY;

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
            .then((response) => {
                this.setState({
                    locationWeather: response.data,
                    status: 'loaded'
                })
            })
            .catch(error => console.log(error))
    }

    newSearch = (newLocation) => {
        const apiKey = process.env.REACT_APP_API_KEY;

        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&units=metric&appid=${apiKey}`)
        .then((response) => {
            this.setState({
                locationWeather: response.data,
                status: 'loaded'
            })
        })
        .catch(error => {
            if (error.response) {
                this.setState({
                    error: true,
                })

            } else if (error.request) {
                console.log(error.request);
            } else {           
                console.log('Error', error.message);
            }
        })
    }

    addNewFavouriteLocation = (location) => {
        this.props.handleNewFavouriteLocation(location);
    }

    removeOneFavouriteLocation = (location) => {
        this.props.handleRemoveFavouriteLocation(location);
    }

    render() {
        const { status, location, locationWeather, error } = this.state;
        const { favouritesList } = this.props;
        return (
            <>
            <Navbar />
            <main className="w-11/12 max-w-screen-sm mx-auto text-center my-4 flex flex-col items-center">
                
                <p className="text-lg my-4 font-normal">Checkout the weather forecast of any city <br></br>and save your favourites ones!</p>
                <SearchBar newLocation={this.newSearch}/>

                { status === 'loading' && <p className="text-lg mb-4 font-normal mt-8"><span className="rotate">⏳</span> Loading weather forecast for {location}</p>}
                { status === 'loaded' && 
                    < ForecastCard 
                        locationWeather={locationWeather} 
                        addNewFavourite={this.addNewFavouriteLocation}
                        removeFavourite={this.removeOneFavouriteLocation}
                        favouritesList={favouritesList}
                    />
                }
                { error === true && < Redirect to='/404'/>}
            </main>
            </>
        )
    }
}

export default HomePage
