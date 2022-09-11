import {
  AppContainer,
  Form,
  Image,
  PokemonInfoContainer,
  DivContainer,
  SuggestionsList,
} from "./Styles";

import { useState, useEffect } from "react";

import api from "./services/api";
import PokemonList from "./components/PokemonList";

function App() {
  const [input, setInput] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [image, setImage] = useState("");
  const [notFound, setNotFound] = useState("Search...");
  const [filterSearch, setFilterSearch] = useState([]);
  const [pokemons, setPokemons] = useState();

  const HandleSearch = async (event) => {
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
  };

  const SearchPokemon = async (event, suggestion) => {
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
  };

  useEffect(() => {
    if (input == "") {
      setPokemons("");
    }
  }, [input]);

  return (
    <AppContainer>
      {image == "" && (
        <section>
          <Image src="./images/image.jpeg" />
          <h3>{notFound}</h3>
        </section>
      )}

      {image != "" && (
        <PokemonInfoContainer>
          <div>
            <img src={image} />
          </div>

          <h3 translate="no">
            {pokemonInfo.data.name.toUpperCase()} - {pokemonInfo.data.id}
          </h3>
        </PokemonInfoContainer>
      )}

      <DivContainer>
        <Form onSubmit={SearchPokemon}>
          <input
            onChange={HandleSearch}
            type="search"
            value={input}
            placeholder="id or name"
            required
          />
        </Form>

        {pokemons && (
          <SuggestionsList>
            {pokemons.map((element, index) => (
              <PokemonList
                id={index}
                pokemon={element.name}
                setInput={setInput}
                setPokemons={setPokemons}
                SearchPokemon={SearchPokemon}
              />
            ))}
          </SuggestionsList>
        )}
      </DivContainer>
    </AppContainer>
  );
}

export default App;
