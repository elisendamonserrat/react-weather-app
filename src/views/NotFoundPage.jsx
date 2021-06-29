import React from 'react'
import  { Link } from 'react-router-dom'


export default function NotFoundPage() {
    console.log('user being redirected to Not Found PAGE')
    return (
        <div className="w-11/12 max-w-screen-sm mx-auto text-center my-8 flex flex-col items-center">
            <h1 className="font-bold text-5xl mb-8">Oops!</h1>
            <p className="font-semibold text-xl mb-8">We can't seem to find the page you're looking for</p>
            <Link to="/">
                <button
                    className="px-4 py-2 my-2 border rounded-lg bg-yellow-300 rounded-lg font-bold uppercase"
                >
                  Go to Home Page
                </button>
            </Link>
        </div>
    )
}
