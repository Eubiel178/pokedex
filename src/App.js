import { useState } from "react";
import "./App.css";

import api from "./services/api";
import PokemonList from "./components/PokemonList";

function App() {
  const [input, setInput] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [image, setImage] = useState("");
  const [notFound, setNotFound] = useState("Search...");
  const [filterSearch, setFilterSearch] = useState([]);
  const [pokemons, setPokemons] = useState();

  async function HandleSearch(event) {
    setInput(event.target.value);

    const response = await api.get();
    setFilterSearch(response.data.results);

    let pokemonsFiltred = filterSearch.filter((pokemon) => {
      return pokemon.name.includes(input.toLowerCase());
    });

    if (input.length > 1 && pokemonsFiltred.length > 0) {
      setPokemons(pokemonsFiltred);
    } else {
      setPokemons("");
    }
  }

  async function SearchPokemon(event, suggestion) {
    event.preventDefault();

    let pokemon;

    if (suggestion) {
      pokemon = suggestion;
    } else {
      pokemon = input.toLowerCase();
    }

    setInput("");

    try {
      const response = await api.get(`/${pokemon}`);

      setPokemonInfo(response);
      setImage(
        response.data.sprites.versions["generation-v"]["black-white"][
          "animated"
        ]["front_default"]
      );
    } catch (error) {
      setImage("");
      setNotFound("Pokemon not found...");
    }
  }

  return (
    <main>
      <div className="AppContainer">
        {image == "" && (
          <section>
            <img className="Image" src="./image.jpeg" />
            <h3 className="PokemonName">{notFound}</h3>
          </section>
        )}

        {image != "" && (
          <section>
            <div className="PokemonInfoContainer">
              <img className="Gif" src={image} />
            </div>

            <h3 className="PokemonName">
              {pokemonInfo.data.name.toUpperCase()} - {pokemonInfo.data.id}
            </h3>
          </section>
        )}

        <div className="DivContainer">
          <form onSubmit={SearchPokemon} className="Form">
            <input
              className="Input"
              onChange={HandleSearch}
              type="search"
              value={input}
              placeholder="id or name"
              required
            />
          </form>

          {pokemons && (
            <form className="SuggestionsList">
              {pokemons.map((element, index) => (
                <PokemonList
                  id={index}
                  pokemon={element.name}
                  setInput={setInput}
                  setPokemons={setPokemons}
                  SearchPokemon={SearchPokemon}
                />
              ))}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
