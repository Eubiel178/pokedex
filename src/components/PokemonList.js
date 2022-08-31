import Styles from "./PokemonList.module.css";

function PokemonList({
  className,
  pokemon,
  setInput,
  setPokemons,
  SearchPokemon,
  id,
}) {
  function Suggestion(event) {
    setInput(pokemon);

    setPokemons("");
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
