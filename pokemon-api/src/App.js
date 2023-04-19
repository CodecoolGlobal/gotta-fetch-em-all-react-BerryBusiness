

import React, { useState, useEffect } from "react";
import Locations from './components/Locations'
import Pokemons from './components/Pokemons'
import './App.css';

function App() {
const [locations, setLocations] = useState([]);
const [clickedLocation, setClickedLocation] = useState(false);
const [pokemons, setPokemons] = useState([]);
const [areas, setAreas] = useState([]);
const [onLocation, setOnLocation] = useState([]);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location") //fetch all locations
      .then((res) => res.json())
      .then((data) => setLocations(data.results));
    }, []);
   
  useEffect(() => {
    fetch(`${onLocation.url}`)  //fetch areas of clicked loaction
      .then((res) => res.json())
      .then((data) => setAreas(data.areas));
    }, [onLocation]);

    
    const getRandomArea  = Math.floor(Math.random() * areas.length);
    console.log('randomArea', getRandomArea);
    
    console.log('areas: ', areas[getRandomArea]);

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/location-area/1/`)   //fetch encounters from random chosen area
        .then((res) => res.json())
        .then((data) => setPokemons(data.pokemon_encounters));
      }, []);

  const getRandomPoke  = Math.floor(Math.random() * pokemons.length);
      console.log('randomPoke', getRandomPoke);
 
  const chosenPokemon = pokemons[getRandomPoke]
  console.log(chosenPokemon.pokemon.url);

   /*  console.log('loc:', locations);
    console.log('pokes:', pokemons);
 */
  const onLocationSelected = (location) => {
      setOnLocation(location)
  }

  console.log('onLocation', onLocation);

  return (
    <div className="App">
      { clickedLocation ? (
        <div>
          {
            <Pokemons pokemons={chosenPokemon} 
                     
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
