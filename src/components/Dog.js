// Dog.js
import React from "react";

function Dog(props) {
  const handlePetDog = () => {
    alert("You pet " + props.dog.name);
  };
  return (
    <div>
      {props.dog.name} the {props.dog.type}
      <button onClick={handlePetDog}>Pet Me</button>
    </div>
  );
}

export default Dog;
