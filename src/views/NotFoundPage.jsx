import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="w-11/12 max-w-screen-sm mx-auto flex flex-col items-center mt-4">
            <h1 className="font-bold text-3xl mb-4">Oops!</h1>
            <p className="text-lg mb-8">We can't seem to find the location you're looking for</p>
            <img  className="w-2/6" src="/img/embarrassed.png" alt="page not found" />
            <Link to="/">
                <button
                    style={{color: 'rgba' + '(54, 54, 54, 1)'}}
                    className="px-4 py-2 mt-8 border-none rounded-lg bg-yellow-400 rounded-lg font-bold uppercase"
                >
                  Go Back
                </button>
            </Link>
        </div>
    )
}
