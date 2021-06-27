import React from 'react'

function ForecastCard(props) {
    const { locationWeather } = props;
    console.log(typeof locationWeather.main.temp_min)

    const mathRoundTemperature = (temperature) => {
        console.log(temperature)
        return Math.round(temperature);
    }

    return (
        <div>
            <h1>Weather in {locationWeather.name}</h1>
            <div>
                <p><strong>{locationWeather.weather[0].main}</strong></p>
                <div className="flex items-center">
                    <p className="font-bold text-5xl">{mathRoundTemperature(locationWeather.main.temp)}°</p>
                    <img src={`http://openweathermap.org/img/wn/${locationWeather.weather[0].icon}@2x.png`}  alt={`weather in ${locationWeather.name}`}/>
                </div>
            </div>
            <div>
                <p>Min {mathRoundTemperature(locationWeather.main.temp_min)}° / Max {mathRoundTemperature(locationWeather.main.temp_max)}°</p>
            </div>
        </div>
    )
}

export default ForecastCard
