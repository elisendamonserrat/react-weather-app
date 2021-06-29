import React from 'react'

export default function Navbar() {
    return (
        <nav className="w-11/12 max-w-screen-md mx-auto text-center my-4 flex items-center">
            <img className="w-10 h-10 mr-4 inline-block" src="/img/weather-app.png" alt="Weather app icon"/>
            <p className="font-bold text-yellow-500 text-xl">Weather App</p>
        </nav>
    )
}
