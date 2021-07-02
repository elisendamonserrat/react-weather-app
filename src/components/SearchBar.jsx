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
      <div className="flex items-center w-full">
        <input
          type="text"
          value={location}
          onChange={this.handleInput}
          className="py-2 px-2 w-11/12 border rounded-mg max-w-2xl"
        />
        <button
          type="submit"
          className="border px-4 py-2 bg-yellow-400 rounded-mg font-bold uppercase inline-block"
          onClick={this.handleNewLocation}
        >
          Check
        </button>
      </div>
    )
  }
}

export default SearchBar
