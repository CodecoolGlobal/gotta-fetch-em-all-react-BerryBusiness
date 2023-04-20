

import React, { useState, useEffect } from "react";
import Locations from './components/Locations'
import Pokemons from './components/Pokemons'
import Battle from './components/Battle';
import OwnPokemons from './components/OwnPokemons';
import './App.css';

function App() {
//const [isLoading, setIsloading] = useState(true);
const [locations, setLocations] = useState([]);
const [clickedLocation, setClickedLocation] = useState(false);
const [onLocation, setOnLocation] = useState([]);
const [onePokemon, setOnePokemon] = useState(null);
//let singlePokemon;

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location") //fetch all locations
      .then((res) => res.json())
      .then((data) => setLocations(data.results))
    }, []);
    
    console.log('onePoke', onePokemon)

useEffect(() => {
allAreas(onLocation);

  async function allAreas (onLocation){
    const response = await fetch(`${onLocation.url}`)
    const allAreasOnLocation = await response.json();
    const oneAreaUrl = allAreasOnLocation.areas[Math.floor(Math.random() * allAreasOnLocation.areas.length)].url
    getPokemonArray(oneAreaUrl)
  }
  async function getPokemonArray (oneAreaUrl) {
    const pokemonsRes = await fetch(oneAreaUrl)
    const pokemonArray = await pokemonsRes.json()
    const encounters = await pokemonArray.pokemon_encounters
    console.log('pokemons', pokemonArray)
    console.log('encounters', encounters)
   getOnePokemon(encounters)
  }
  
  async function getOnePokemon (encounters) {
    const onePokemonUrl = await encounters[Math.floor(Math.random() * encounters.length)].pokemon.url
    const pokemonRes = await fetch(onePokemonUrl)
    const singlePoke = await pokemonRes.json()
    
    setOnePokemon(singlePoke)
  }
  
}, [onLocation]);
 
  

  const onLocationSelected = (location) => {
      setOnLocation(location)
      
    }
    
//allAreas(onLocation)
  console.log('onLocation', onLocation);
  console.log('onePokemon:', onePokemon);

  return (
    <div className="App">
      { clickedLocation ? (
        <div>
          
           {onePokemon !== [] && <Pokemons 
           pokeName={JSON.stringify(onePokemon)}
           
                     
            />
            
            
          }
        </div>
      ) : (

        <div>
          {
            
            <Locations 
            locations={locations}
            setClickedLocation={setClickedLocation}
            onLocationSelected={onLocationSelected}
            />
          }
        </div>
      )

      }
    </div>
  );
}

export default App;
