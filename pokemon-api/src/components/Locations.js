const Locations = ({locations, setClickedLocation}) => {
  return (
    <div>
     { locations.map((location) => (
      <div key={location.name}>
      <h2>{location.name}
        </h2>
        <button onClick={() => setClickedLocation(true)}>Check out this location</button>
      </div>
      ))}
    
    </div>
    );
}
 
export default Locations;