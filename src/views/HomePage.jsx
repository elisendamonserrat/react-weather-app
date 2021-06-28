import React, { Component } from 'react'
import axios from 'axios'
import ForecastCard from '../components/ForecastCard';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Barcelona',
            locationWeather: {},
            status: 'loading',
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

    render() {
        const { status, location, locationWeather } = this.state;
        return (
            <main className="w-11/12 max-w-screen-sm mx-auto text-center my-8 flex flex-col items-center">
                This is the home page - Here goes the input componenet

                { status === 'loading' && <p>Loading weather forecast for {location}</p>}
                { status === 'loaded' && < ForecastCard locationWeather={locationWeather}/>}
            </main>
        )
    }
}

export default HomePage
