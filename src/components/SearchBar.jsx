import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Barcelona'
        }
    }

    handleInput = (e) => {
        console.log(e.target.value)
        const newLocation = e.target.value;
        this.setState({
            location: newLocation,
        })
    }

    render() {
        const { location } = this.state;
        return (
            <>
                <input
                    type="text"
                    value={location}
                    onChange={this.handleInput}
                    className="py-2 pl-4 w-96 text-lg w-10/12 my-4 border rounded-lg"
                />  
                <button type="submit" className=" px-4 py-2 my-2 border rounded-lg bg-yellow-300 rounded-lg font-bold uppercase">
                    Check the Weather
                </button>
            </>
        )
    }
}

export default SearchBar
