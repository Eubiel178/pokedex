import { Button } from "./Styles";

const PokemonList = ({ pokemon, setInput, setPokemons, SearchPokemon, id }) => {
  const Suggestion = (event) => {
    setInput(pokemon);

    setPokemons("");

    SearchPokemon(event, pokemon);
  };

  return (
    <div>
      <Button translate="no" key={id} onClick={Suggestion}>
        {pokemon}
      </Button>
    </div>
  );
};

export default PokemonList;
