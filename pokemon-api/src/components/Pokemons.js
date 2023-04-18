const Pokemons = ({pokemons}) => {
  return ( 
    <div>
    { pokemons.map((pokemon) => (
     <div key={pokemon.pokemon.name}>
     <h2>{pokemon.pokemon.name}
       </h2>
       
     </div>
     ))}
   
   </div>

   );
}
 
export default Pokemons;