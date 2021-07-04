import React, { Component } from 'react'
import ForecastCard from '../components/ForecastCard';
import SearchBar from '../components/SearchBar';

import apiClient from '../services/apiClient';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Barcelona',
            locationWeather: {},
            status: 'loading',
            error: false,
            redirect: false,
        }
    }

    componentDidMount = () => {
        const { location } = this.state;
        this.getWeather(location)
    }

    newSearch = (newLocation) => {
        this.getWeather(newLocation)
    }

    async getWeather(location) {
      this.setState({
        status: 'loading'
      })

      try {
        const locationWeather = await apiClient.getWeatherByLocation(location);
        this.setState({
          location: location,
          locationWeather: locationWeather,
          status: 'loaded'
        })
      } catch(error) {
        const { status, data: { message } } = error.response;
          if (status === 404) {
            this.setState({
              status: 'error',
              error: message
            })
          } else {
            const { history } = this.props;
            history.push('/404')
          }
      }
    }

    addNewFavouriteLocation = (location) => {
        this.props.handleNewFavouriteLocation(location);
    }

    removeOneFavouriteLocation = (location) => {
        this.props.handleRemoveFavouriteLocation(location);
    }

    render() {
        const { status, location, locationWeather, error } = this.state;
        const { favouritesList, theme } = this.props;
        return (
            <>         
                <p className="text-lg my-4 ">Checkout the weather forecast of any city <br></br>and save your favourites ones!</p>
                <SearchBar newLocation={this.newSearch} initialValue={location}/>

                { status === 'loading' && <p className="text-lg mb-4 font-normal mt-8"><span className="rotate">⏳</span> Loading weather forecast for {location}</p>}
                { status === 'loaded' && 
                    < ForecastCard 
                        locationWeather={locationWeather} 
                        addNewFavourite={this.addNewFavouriteLocation}
                        removeFavourite={this.removeOneFavouriteLocation}
                        favouritesList={favouritesList}
                    />
                }
                {status === 'error' && <p className="text-lg mb-4 font-normal mt-8">Sorry, {error}. <br></br> Try another location 🌎</p>}
            </>
        )
    }
}

export default HomePage
