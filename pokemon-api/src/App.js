

import React, { useState, useEffect } from "react";
import Locations from './components/Locations'
import Pokemons from './components/Pokemons'
import './App.css';

function App() {
const [locations, setLocations] = useState([]);
const [clickedLocation, setClickedLocation] = useState(false);
const [onLocation, setOnLocation] = useState([]);
const pokemonArray = [];

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location") //fetch all locations
      .then((res) => res.json())
      .then((data) => setLocations(data.results))
    }, []);
   
  async function allAreas (onLocation){
    const response = await fetch(`${onLocation.url}`)
    const allAreasOnLocation = await response.json();
    const oneAreaUrl = allAreasOnLocation.areas[Math.floor(Math.random() * allAreasOnLocation.areas.length)].url
    getPokemonArray(oneAreaUrl)
  }
  async function getPokemonArray (oneAreaUrl) {
    const pokemonsRes = await fetch(oneAreaUrl)
    const pokemonArray = await pokemonsRes.json()
    console.log('pokemons', pokemonArray)
  }
  
  /* async function getOnePokemon (pokemonArray) {
     pokemonArray[Math.floor(Math.random() * pokemonArray.length)]
   }
   
  const getRandomPoke  = Math.floor(Math.random() * pokemons.length);
  
 
  const chosenPokemon = pokemons[getRandomPoke] */
  

  const onLocationSelected = (location) => {
      setOnLocation(location)
      
    }
    
allAreas(onLocation)
  console.log('onLocation', onLocation);

  return (
    <div className="App">
      { clickedLocation ? (
        <div>
          {
            <Pokemons pokemons={pokemonArray} 
                     
            />
            
          }
        </div>
      ) : (

        <div>
          {
            
            <Locations locations={locations} 
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
