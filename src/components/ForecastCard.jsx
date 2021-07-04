import React, { Component } from 'react'
import styled from 'styled-components';
import { currentDate, mathRoundTemperature} from '../helpers'

const Subtitle = styled.p`
    color: ${props => props.theme.subtitles};
    font-size: 1rem;
    line-height: 1.5rem;
`

const H1 = styled.h1`
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 0.2rem;
    color: ${props => props.theme.h1};
`

const H2 = styled.h2`
    color: ${props => props.theme.subtitles};
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-top: 1.5rem;
`

export class ForecastCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavourite: false,
        }
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

    render() {
        const { locationWeather, favouritesList } = this.props;
        const index = favouritesList.findIndex(location => location.name === locationWeather.name);

        return (
            <div className="border my-8 flex flex-col items-center py-4 rounded-md w-10/12 max-w-xs">
                {index === -1 && <button className="self-end mx-8" onClick={this.handleNewFavourite}>🤍</button> }
                {index > -1 && <button className="self-end mx-8" onClick={this.removeFromFavourites}>❤️</button> }

                <H1>{locationWeather.name}</H1>
                <Subtitle>{currentDate()}</Subtitle>
                <H2>{locationWeather.weather[0].main}, {locationWeather.weather[0].description}</H2>
                <div className="flex flex-col items-center">
                        <img src={`http://openweathermap.org/img/wn/${locationWeather.weather[0].icon}@4x.png`}  alt={`weather in ${locationWeather.name}`}/>
                </div>
                <div className="border p-4 rounded-md flex items-center justify-between w-11/12">
                    <Subtitle>Min {mathRoundTemperature(locationWeather.main.temp_min)}°</Subtitle>
                    <p className="font-bold text-3xl">{mathRoundTemperature(locationWeather.main.temp)}°</p>
                    <Subtitle>Max {mathRoundTemperature(locationWeather.main.temp_max)}°</Subtitle>
                </div>
           </div>
        )
    }
}

export default ForecastCard
