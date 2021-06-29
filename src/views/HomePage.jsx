import React, { Component } from 'react'
import axios from 'axios'
import ForecastCard from '../components/ForecastCard';
import SearchBar from '../components/SearchBar';
import  { Redirect } from 'react-router-dom'

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Barcelona',
            locationWeather: {},
            status: 'loading',
            error: false,
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

    render() {
        const { status, location, locationWeather, error } = this.state;
        return (
            <main className="w-11/12 max-w-screen-sm mx-auto text-center my-8 flex flex-col items-center">
                <SearchBar newLocation={this.newSearch}/>

                { status === 'loading' && <p>Loading weather forecast for {location}</p>}
                { status === 'loaded' && < ForecastCard locationWeather={locationWeather}/>}
                { error === true && < Redirect to='/404'/>}
            </main>
        )
    }
}

export default HomePage
