// import React from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";
import React, { Component } from "react";

class DogApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Scruffles",
    };
  }
}

function App() {
  let dogs = [
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
  ];

  function pickNewFavorite() {
    let newDogIndex = Math.floor(Math.random() * dogs.length);
    return dogs[newDogIndex];
  }

  let favoriteDog = pickNewFavorite();

  return (
    <div className="dogs">
      <Header numDogs={dogs.length} />
      <h2>My Dogs</h2>
      <div>
        {dogs.map((dog) => (
          <Dog dog={dog} />
        ))}
      </div>
      <h2>My Favorite dog is {favoriteDog.name}</h2>
    </div>
  );
}

export default App;
