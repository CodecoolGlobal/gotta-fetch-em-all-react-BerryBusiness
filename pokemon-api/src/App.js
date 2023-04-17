

import React, { useState, useEffect } from "react";
import Location from './components/location'
import './App.css';

function App() {
const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location")
      .then((res) => res.json())
      .then((data) => setLocations(data.results));
    }, []);
    
    console.log(locations);
  return (
    <div className="App">
     <Location locations={locations} 
     />
    </div>
  );
}

export default App;
