const Locations = ({locations, setClickedLocation, onLocationSelected}) => {

  return (
    <div class='Location' >
     { locations.map((location, index) => (
      <div id='locationContainer' key={location.name}>
      <h2 id='location'>{location.name}
        </h2>
        <button class='locationButton' id={index} onClick={() => {
          onLocationSelected(location);
          setClickedLocation(true);
        }}>Check out this location</button>
      </div>
      ))}
    
    </div>
    );
}
 
export default Locations;