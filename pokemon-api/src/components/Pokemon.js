
export const Pokemon = ({ pokemon, onPokemonChosen }) => {
    return (
        <div key={pokemon.name}>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img style={{ imageRendering: "pixelated" }} src={pokemon.sprites.front_default} alt={'ownedPokemon'} />
            <h2>Base Experience: {pokemon.base_experience}</h2>
            <div className="outer">
                {onPokemonChosen && <button className="poke-ball" onClick={() => { 
                    onPokemonChosen(pokemon); 
                }}><b>I choose you !!!</b></button>}
            </div>
        </div>
    );
}
