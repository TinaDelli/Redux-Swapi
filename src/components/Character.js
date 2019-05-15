import React from "react";

const Character = props => {
  return (
    <div>
  <h1>{props.character.name}</h1>
  <h3>Height:{props.character.height}</h3>
  <h3>Mass:{props.character.mass}</h3>
  </div>
  );
};

export default Character;
