import { Button } from "./Styles";

function PokemonList({ pokemon, setInput, setPokemons, SearchPokemon, id }) {
  function Suggestion(event) {
    setInput(pokemon);

    setPokemons("");

    SearchPokemon(event, pokemon);
  }

  return (
    <div>
      <Button translate="no" key={id} onClick={Suggestion}>
        {pokemon}
      </Button>
    </div>
  );
}

export default PokemonList;
