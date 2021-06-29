import React, { Component } from 'react'
import Navbar from '../components/Navbar';

export class FavouritesPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <main className="w-11/12 max-w-screen-sm mx-auto text-center my-4 flex flex-col items-center">
                    <h1>This is your favourites page</h1>
                    
                </main>
            </>
        )
    }
}

export default FavouritesPage
