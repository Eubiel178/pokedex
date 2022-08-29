function PokemonList({className, pokemon, setInput, setPokemons, search, id}) {
    function Suggestion(value, callback) {
        setInput(value)
        setPokemons("")
    }
  
    return <p key={id} onClick={() => Suggestion(pokemon, search)} className={className}>{pokemon}</p>
}

export default PokemonList
