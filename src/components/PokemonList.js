import Styles from "./PokemonList.module.css";

function PokemonList({ pokemon, setInput, setPokemons, SearchPokemon, id }) {
  function Suggestion(event) {
    setInput(pokemon);

    setPokemons("");

    SearchPokemon(event, pokemon);
  }

  return (
    <div>
      <button className={Styles.Button} key={id} onClick={Suggestion}>
        {pokemon}
      </button>
    </div>
  );
}

export default PokemonList;
