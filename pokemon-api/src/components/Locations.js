const Locations = ({locations, setClickedLocation, onLocationSelected}) => {

  return (
    <div>
     { locations.map((location, index) => (
      <div key={location.name}>
      <h2>{location.name}
        </h2>
        <button id={index} onClick={() => {
          onLocationSelected(location);
          setClickedLocation(true);
        }}>Check out this location</button>
      </div>
      ))}
    
    </div>
    );
}
 
export default Locations;