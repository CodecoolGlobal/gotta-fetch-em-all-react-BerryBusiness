const Location = ({locations}) => {
  return (
    <div>
     { locations.map((location) => (
      <div key={location.name}>
      <h2>{location.name}
        </h2>
      </div>
      ))}
    
    </div>
    );
}
 
export default Location;