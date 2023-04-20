const Pokemons = ({pokeName}) => {

 /* const pokeName = pokemons.name
 const imgLink = pokemons.sprites.front_default
 const pokeStats = pokemons.stats[0].effort */
  
  return <> {
   
  pokeName ? <div class='pokemonDisp' >
    
    
      <h2>{pokeName.name}</h2>
      <img style={{imageRendering: "pixelated"}} src={pokeName.sprites.front_default} alt={'pokemon'}/>
      <h3>{pokeName.stats.map((stat) => {
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