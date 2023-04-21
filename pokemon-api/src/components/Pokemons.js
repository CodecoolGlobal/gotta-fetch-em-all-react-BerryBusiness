import Battle from "./Battle";
import React, { useState, useEffect } from 'react';
import { Pokemon } from "./Pokemon";


const usersPokemon = [
  "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  "https://pokeapi.co/api/v2/pokemon/charizard",
  "https://pokeapi.co/api/v2/pokemon/poliwhirl"
]

const Pokemons = ({ pokeName }) => {
  const [clickedpokemon, setClickedpokemon] = useState(false);
  const [startingpokemon, setStartingPokemon] = useState([]);
  const [choosenPokemon, setChoosenPokemon] = useState([])

  console.log("poke", pokeName);

  useEffect(() => {
    const promises = usersPokemon.map(url => fetch(url).then(res => res.json()))
    Promise.all(promises).then(data => setStartingPokemon(data))
  }, []);

  const handlePokemonChosen = (userPokemon) => {
    setChoosenPokemon(userPokemon);
    setClickedpokemon(true);
  }

  console.log(pokeName)
  return (
    !clickedpokemon && pokeName !== null ? (
      <div class='pokemonsEncounter'>
        <div class='enemyPokemon'>
          <h1> Pokemon appeared!</h1>
          <h2>{pokeName.name.charAt(0).toUpperCase() + pokeName.name.slice(1)}</h2>
          <img style={{ imageRendering: "pixelated" }} src={pokeName.sprites.front_default} alt={'pokemon'} />
          <h2>Height: {pokeName.height}</h2>
          <h2>Base Experience: {pokeName.base_experience}</h2>
        </div>
        <div className="ownedPokemons">
          <div><h1><b>Choose your Pokemon!</b></h1></div>
          {startingpokemon.map((pokemon) => {
            return (<Pokemon pokemon={pokemon} onPokemonChosen={handlePokemonChosen}/>);
          })}
        </div>

      </div>
    ) : clickedpokemon === true && choosenPokemon !== null ? (
      <div>
        <Battle enemy={pokeName} player={choosenPokemon} />
      </div>
    ) : (
      <div>nothing</div>
    )
  );

}
export default Pokemons;