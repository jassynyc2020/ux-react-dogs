// import React from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";
import React, { Component } from "react";

class DogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [
        {
          name: "Scruffles",
          type: "Chihuahua",
        },
        {
          name: "Snarf",
          type: "Border Collie",
        },
        {
          name: "Wookie",
          type: "English Sheepdog",
        },
      ],
      favoriteDog: "",
    };
  }
  pickNewFavorite = () => {
    let newDogIndex = Math.floor(Math.random() * this.state.dogs.length);
    return this.state.dogs[newDogIndex];
  };

  pickFavoriteDog = () => {
    this.setState({
      favoriteDog: this.pickNewFavorite(),
    });
  };

  render() {
    return (
      <div className="dogs">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Dogs</h2>
        <div>
          {this.state.dogs.map((dog) => (
            <Dog dog={dog} />
          ))}
        </div>
        <h2>My Favorite dog is {this.state.favoriteDog.name}</h2>
        <button onClick={() => this.pickFavoriteDog()}>Pick Favorite</button>
      </div>
    );
  }
}

export default DogApp;
