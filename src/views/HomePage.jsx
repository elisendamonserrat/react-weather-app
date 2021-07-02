import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import ForecastCard from '../components/ForecastCard';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

import apiClient from '../services/apiClient';


export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Barcelona',
      locationWeather: {},
      status: 'loading',
      error: false,
      favourites: {},
      redirect: false
    }
  }

  componentDidMount = () => {
    const { location } = this.state;
    this.getWeather(location)
  }

  newSearch = (newLocation) => {
    this.getWeather(newLocation)
  }

  getWeather(location) {
    this.setState({
      status: 'loading'
    })
    apiClient.getWeatherByLocation(location)
      .then((response) => {
        this.setState({
          location: location,
          locationWeather: response,
          status: 'loaded'
        })
      })
      .catch(error => {
        const { status, data: { message } } = error.response;
        if (status === 404) {
          this.setState({
            status: 'error',
            error: message
          })
        } else {
          // dos formas de hacer el redirect
          const { history } = this.props;
          history.push('/404')
        }
      })
  }

  render() {
    const { status, location, locationWeather, error, redirect } = this.state;
    console.log(this.props);
    // dos formas de hacer el redirect
    if (redirect) {
      return <Redirect to='/404' />
    }

    return (
      <>
        <Navbar />
        <main className="w-11/12 max-w-screen-sm mx-auto text-center my-4 flex flex-col items-center">

          <p className="text-lg my-4 font-normal">Checkout the weather forecast of any city <br></br>and save your favourites ones!</p>
          <SearchBar newLocation={this.newSearch} initialValue={location} />

          {status === 'loading' && <p className="text-lg mb-4 font-normal mt-8"><span className="rotate">⏳</span> Loading weather forecast for {location}</p>}
          {status === 'loaded' && <ForecastCard locationWeather={locationWeather} />}
          {status === 'error' && <p>{error}</p>}
        </main>
      </>
    )
  }
}

export default HomePage
