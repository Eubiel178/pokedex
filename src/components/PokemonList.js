function PokemonList({className, pokemon, setInput}) {
    return <p onClick={()=> setInput(pokemon)} className={className}>{pokemon}</p>
}

export default PokemonList