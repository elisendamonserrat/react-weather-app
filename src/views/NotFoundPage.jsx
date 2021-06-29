import React from 'react'

export default function NotFoundPage() {
    console.log('user being redirected to Not Found PAGE')
    return (
        <div className="py-7 w-11/12 max-w-sm">
            <h1 className="font-bold text-5xl mb-4">Oops!</h1>
            <p className="font-semibold text-2xl">We can't seem to find the page you're looking for</p>
        </div>
    )
}
