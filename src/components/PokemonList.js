function PokemonList({className, pokemon, setInput}) {
    function Suggestion(pokemon) {
        setInput(pokemon)
    }
  
    return <p onClick={()=> Suggestion(pokemon)} className={className}>{pokemon}</p>
}

export default PokemonList
