const Pokemons = ({pokeName}) => {
const pokemon = JSON.parse(pokeName)
console.log('parsed', pokemon)
 /* const pokeName = pokemons.name
 const imgLink = pokemons.sprites.front_default
 const pokeStats = pokemons.stats[0].effort */
  
  return <> {
   
  pokemon ? <div class='pokemonDisp'>
    
    
      <h2>{pokemon.name}</h2>
      <img style={{imageRendering: "pixelated"}} src={pokemon.sprites.front_default} alt={'pokemon'}/>
      <h3>{pokemon.stats.map((stat) => {
        return <>
        <div>{stat.base_stat}</div>
        <div>{stat.stat.name}</div>
        </>
      })}</h3>
      




  </div> 
  
  
  : <div>No poke.</div>
}

</>
}
export default Pokemons;