function PokemonList({className, pokemon, setInput,  SearchPokemon}) {
    function Suggestion(pokemon) {
        setInput(pokemon)
        
        SearchPokemon(e)
    }
  
    return <p onClick={()=> Suggestion(pokemon)} className={className}>{pokemon}</p>
}

export default PokemonList
