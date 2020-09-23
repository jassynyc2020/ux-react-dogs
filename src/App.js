// import React from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";
import React, { Component } from "react";

class DogApp extends Component {
  state = {
    dogs: [
      {
        id: "a",
        name: "Scruffles",
        type: "Chihuahua",
      },
      {
        id: "b",
        name: "Snarf",
        type: "Border Collie",
      },
      {
        id: "c",
        name: "Wookie",
        type: "English Sheepdog",
      },
    ],
    favoriteDog: "",
    favoriteDogType: "",
  };

  // pickNewFavorite = () => {
  //   let newDogIndex = Math.floor(Math.random() * this.state.dogs.length);
  //   return this.state.dogs[newDogIndex];
  // };

  // pickFavoriteDog = () => {
  //   this.setState({
  //     favoriteDog: this.pickNewFavorite(),
  //   });
  // };

  handleNewDogChange = (event) => {
    this.setState({ favoriteDog: event.target.value });
  };

  handleNewDogTypeChange = (event) => {
    this.setState({ favoriteDogType: event.target.value });
  };

  handleFavoriteDog = (event) => {
    this.setState((state) => {
      return {
        dogs: [
          ...state.dogs,
          { name: state.favoriteDog, type: state.favoriteDogType },
        ],
        favoriteDog: "",
        favoriteDogType: "",
      };
    });
  };

  render() {
    return (
      <div className="dogs">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Dogs</h2>
        <ul className="dogList">
          {this.state.dogs.map((dog, index) => (
            <li key={index.id}>{index.name}
              <Dog dog={dog} />
            </li>
          ))}
        </ul>
        <br />
        <h2>My Favorite dog is</h2>
        <div>
          <input
            type="text"
            onChange={this.handleNewDogChange}
            value={this.state.favoriteDog}
          />
          <input
            type="text"
            onChange={this.handleNewDogTypeChange}
            value={this.state.favoriteDogType}
          />
          <button onClick={this.handleFavoriteDog}>Pick Favorite</button>
        </div>
      </div>
    );
  }
}

export default DogApp;
