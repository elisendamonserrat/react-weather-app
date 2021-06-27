import React from 'react'

function ForecastCard(props) {
    const { locationWeather } = props;
    console.log(locationWeather)

    return (
        <div>
            <div>
                <h1>Weather in {locationWeather.name}</h1>
                <h2>General overview</h2>
                <p>Weather today will be mostly {locationWeather.weather[0].main}</p>

                <h2>Temperature</h2>
                <p>Average temperature {locationWeather.main.temp} Cº</p>
                <p>Min {locationWeather.main.temp_min} Cº</p>
                <p>Max {locationWeather.main.temp_max} Cº</p>
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${locationWeather.weather[0].icon}@2x.png`}  alt={`weather in ${locationWeather.name}`}/>
            </div>
            
        </div>
    )
}

export default ForecastCard
