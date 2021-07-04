import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

import HomePage from "./views/HomePage";
import FavouritesPage from "./views/FavouritesPage";
import NotFoundPage from "./views/NotFoundPage";
import Toggler from "./components/Toggler";
import Navbar from "./components/Navbar";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouritesLocations: [],
      theme: "light",
    };
  }

  addToFavourites = (locationObj) => {
    const favouritesLocationsCopy = [...this.state.favouritesLocations];

    const index = favouritesLocationsCopy.findIndex(
      (location) => location.name === locationObj.name
    );

    if (index === -1) {
      favouritesLocationsCopy.push(locationObj);
    } else {
      throw alert("This location is already in your favourites list");
    }

    this.setState({
      favouritesLocations: favouritesLocationsCopy,
    });
  };

  removeFromFavourites = (locationObj) => {
    const favouritesLocationsCopy = [...this.state.favouritesLocations];

    const filteredFavourites = favouritesLocationsCopy.filter(
      (location) => location !== locationObj
    );
    this.setState({
      favouritesLocations: filteredFavourites,
    });
  };

  themeToggler = () => {
    const { theme } = this.state;
    theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  render() {
    const { favouritesLocations, theme } = this.state;
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="w-full max-w-screen-sm mx-auto text-center my-4 flex flex-col items-center">
          <Toggler theme={theme} toggleTheme={this.themeToggler} />
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomePage
                  favouritesList={favouritesLocations}
                  handleNewFavouriteLocation={this.addToFavourites}
                  handleRemoveFavouriteLocation={this.removeFromFavourites}
                  theme={theme}
                />
              )}
            />
            <Route
              exact
              path="/favourites"
              render={() => (
                <FavouritesPage
                  favouritesList={favouritesLocations}
                  handleNewFavouriteLocation={this.addToFavourites}
                  handleRemoveFavouriteLocation={this.removeFromFavourites}
                  theme={theme}
                />
              )}
            />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
