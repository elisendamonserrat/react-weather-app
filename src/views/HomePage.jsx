import React, { Component } from 'react'

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Barcelona',
            status: 'loading'
        }
    }

    componentDidMount = () => {
        const { location } = this.state;

    }


    render() {
        const { status, location } = this.state;
        return (
            <main>
                This is the home page

                { status === 'loading' && <p>Loading weather forecast for {location}</p>}

                
            </main>
        )
    }
}

export default HomePage
