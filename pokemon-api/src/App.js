

import React, { useState, useEffect } from "react";
import Locations from './components/Locations'
import Pokemons from './components/Pokemons'
import './App.css';

function App() {
const [locations, setLocations] = useState([]);
const [clickedLocation, setClickedLocation] = useState(false);
const [pokemons, setPokemons] = useState([]);
const [selectedArea, setSeledtedArea] = useState(1);

console.log('selectedA:', selectedArea);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location")
      .then((res) => res.json())
      .then((data) => setLocations(data.results));
    }, []);
   
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/location-area/${selectedArea}/`) //adott loaction encounterei kellenek - ferchben fetch?
        .then((res) => res.json())
        .then((data) => setPokemons(data.pokemon_encounters));
      }, [selectedArea]);

  const getRandomPoke  = Math.floor(Math.random() * pokemons.length) + 1;
      console.log(getRandomPoke);

  
  /* const handlerLocation = (location) {
    selectedArea(location)
  }  */ 
  const handleLocation = (event) => {
    event.preventDefault();
    setSeledtedArea(event + 1);
    setClickedLocation(true);
  }

    console.log('loc:', locations);
    console.log('pokes:', pokemons);
  

  return (
    <div className="App">
      { clickedLocation ? (
        <div>
          {
            <Pokemons pokemons={pokemons[getRandomPoke]} 
                     
            />
            
          }
        </div>
      ) : (

        <div>
          {
            
            <Locations locations={locations} 
            setClickedLocation={setClickedLocation}
            onLocationSelected={(location) => console.log(location)}
            />
          }
        </div>
      )

      }
    </div>
  );
}

export default App;
