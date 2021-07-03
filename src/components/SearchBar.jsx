import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.initialValue,
        }
    }

    handleInput = (e) => {
        const newLocation = e.target.value;
        this.setState({
            location: newLocation,
        })
    }

    handleNewLocation = () => {
        const { location } = this.state;
        this.props.newLocation(location);
    }

    render() {
        const { location } = this.state;
        return (
            <div className="flex items-center w-11/12 max-w-sm border rounded-xl">
                <input
                    type="text"
                    value={location}
                    onChange={this.handleInput}
                    className="py-2 px-2 w-11/12 max-w-2xl"
                />  
                <button 
                    type="submit" 
                    className="px-4 py-2 m-0 text-black rounded-xl font-bold uppercase inline-block"
                    onClick={this.handleNewLocation}
                >
                    <img src="/img/search.png" alt="search button" className="w-6"/>
                </button>
            </div>
        )
    }
}

export default SearchBar
