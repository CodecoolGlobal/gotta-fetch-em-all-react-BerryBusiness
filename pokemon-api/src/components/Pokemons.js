import Battle from "./Battle";
import React, { useState, useEffect } from 'react';

const usersPokemon = [
  "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  "https://pokeapi.co/api/v2/pokemon/charizard",
  "https://pokeapi.co/api/v2/pokemon/poliwhirl"
]

const Pokemons = ({ pokeName }) => {
  const [clickedpokemon, setClickedpokemon] = useState(false);
  const [startingpokemon, setStartingPokemon] = useState([]);
  const[choosenPokemon, setChoosenPokemon]=useState([])
 
  console.log( "poke",pokeName);

  useEffect(() => {
    const promises = usersPokemon.map(url => fetch(url).then(res => res.json()))
    Promise.all(promises).then(data => setStartingPokemon(data))
  }, []);

console.log(pokeName)
  return (
    !clickedpokemon && pokeName !== null? (
      <div class='pokemonsEncounter'> 
      <div class='enemyPokemon'>
           <h1> Pokemon appeared</h1>
            <h2>{pokeName.name.charAt(0).toUpperCase() + pokeName.name.slice(1)}</h2>
            <img style={{ imageRendering: "pixelated" }} src={pokeName.sprites.front_default} alt={'pokemon'} />
            <h2>Health: {pokeName.health}</h2>
            <h2>Base Experience: {pokeName.base_experience}</h2>
            </div>
       <div className="ownedPokemons">
              <div>Choose your Pokemon!</div>
         {startingpokemon.map((pokemon,index) => (
          <div id= {index} key={pokemon.name}>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img style={{ imageRendering: "pixelated" }} src={pokemon.sprites.front_default} alt={'ownedPokemon'} />
            <h2>Base Experience: {pokemon.base_experience}</h2>
            <button onClick={() => { setChoosenPokemon(pokemon)
              setClickedpokemon(true)}}>Battle with {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</button>
          </div>
        ))}
        </div>

      </div>
    ) : (
      <div>
        <Battle enemy = {pokeName}  player = {choosenPokemon}/>
      </div>
    )
  );

}
export default Pokemons;