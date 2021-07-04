import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="w-11/12 max-w-screen-md mx-auto text-center my-4 flex items-center justify-between">
            <Link to='/'>
                <div className="flex items-center">
                    <img className="w-9 h-9 mr-2 inline-block" src="/img/weather-app.png" alt="Weather app icon"/>
                    <p className="font-bold text-yellow-500 text-xl">Weather App</p>
                </div>
            </Link>
            <Link to='/favourites'><button className="bg-transparent hover:bg-yellow-400 text-yellow-500 font-semibold hover:text-black py-2 px-2 border border-yellow-500 hover:border-transparent rounded-md">Favourites</button></Link>
        </nav>
    )
}
