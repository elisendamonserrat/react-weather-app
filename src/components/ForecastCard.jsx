import React from 'react'

function ForecastCard(props) {
    const { locationWeather } = props;
    console.log(props)

    const mathRoundTemperature = (temperature) => {
        return Math.round(temperature);
    }
    
    const currentDate = () => {
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


    return (
        <div className="border my-16 flex flex-col items-center py-4 rounded-md w-1/2">
            <h1 className="text-3xl">{locationWeather.name}</h1>
            <p className="text-base text-gray-400 font-semibold">{currentDate()}</p>
            <p className="text-gray-500 font-semibold text-xl mt-6">{locationWeather.weather[0].main}, {locationWeather.weather[0].description}</p>
            <div className="flex flex-col items-center">
                    <img src={`http://openweathermap.org/img/wn/${locationWeather.weather[0].icon}@4x.png`}  alt={`weather in ${locationWeather.name}`}/>
            </div>
            <div className="border p-4 rounded-md flex items-center justify-between w-11/12">
                <p className="text-lg text-gray-400 font-semibold">Min {mathRoundTemperature(locationWeather.main.temp_min)}°</p>
                <p className="font-bold text-5xl">{mathRoundTemperature(locationWeather.main.temp)}°</p>
                <p className="text-lg text-gray-400 font-semibold">Max {mathRoundTemperature(locationWeather.main.temp_max)}°</p>
            </div>
        </div>
    )
}

export default ForecastCard
