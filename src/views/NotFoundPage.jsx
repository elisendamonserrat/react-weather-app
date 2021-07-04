import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFoundPage() {
    return (
        <div className="w-11/12 max-w-screen-sm mx-auto flex flex-col items-center mt-8">
            <h1 className="font-bold text-5xl mb-8">Oops!</h1>
            <p className="text-xl mb-8">We can't seem to find the location you're looking for</p>
            <img  className="w-2/5" src="/img/embarrassed.png" alt="page not found" />
            <Link to="/">
                <button
                    className="px-4 py-2 mt-8 border rounded-lg bg-yellow-300 rounded-lg font-bold uppercase"
                >
                  Go to Home Page
                </button>
            </Link>
        </div>
    )
}
