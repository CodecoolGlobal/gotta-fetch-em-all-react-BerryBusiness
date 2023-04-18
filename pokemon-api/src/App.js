

import React, { useState, useEffect } from "react";
import Locations from './components/Locations'
import Pokemons from './components/Pokemons'
import './App.css';

function App() {
const [locations, setLocations] = useState([]);
const [clickedLocation, setClickedLocation] = useState(false);
const [pokemons, setPokemons] = useState([]);
//const [areas, setAreas] = useState([]);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location")
      .then((res) => res.json())
      .then((data) => setLocations(data.results));
    }, []);
   
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/location-area/1/`) //adott loaction encounterei kellenek - ferchben fetch?
        .then((res) => res.json())
        .then((data) => setPokemons(data.pokemon_encounters));
      }, []);


  /* const handlerLocation = () {

  }   */

    console.log('loc:', locations);
    console.log('pokes:', pokemons);
   // console.log('areas:', areas);

  return (
    <div className="App">
      { clickedLocation ? (
        <div>
          {
            <Pokemons pokemons={pokemons}
            />
            
          }
        </div>
      ) : (

        <div>
          {
            
            <Locations locations={locations} 
            setClickedLocation={setClickedLocation}
            />
          }
        </div>
      )

      }
    </div>
  );
}

export default App;
