import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="w-11/12 max-w-screen-md mx-auto text-center my-4 flex items-center justify-between">
            <div className="flex items-center">
                <img className="w-10 h-10 mr-4 inline-block" src="/img/weather-app.png" alt="Weather app icon"/>
                <p className="font-bold text-yellow-500 text-xl">Weather App</p>
            </div>
            <Link to='/favourites'><button className="border px-2 py-2 bg-gray-100 rounded-lg text-sm uppercase inline-block">Favourites</button></Link>
        </nav>
    )
}
