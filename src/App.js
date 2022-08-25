import { useState } from 'react';
import './App.css';

import api from './services/api';
import PokemonList from './components/PokemonList';

function App() {
  const[input, setInput] = useState('')
  const[pokemonInfo, setPokemonInfo] = useState({})
  const[image, setImage] = useState('')
  const[filterSearch, setFilterSearch] = useState([])
  const[pokemons, setPokemons] = useState()
  
  async function HandleSearch(e) {
    setInput(e.target.value)
    
    const response = await api.get()
    setFilterSearch(response.data.results)

    let pokemonsFiltred = filterSearch.filter((pokemon) => {
      return pokemon.name.includes(input)
    })

    setPokemons(pokemonsFiltred)
  }

  async function SearchPokemon(e) {
    e.preventDefault()
    const pokemon = input.toLowerCase()
    setInput("")
    
    const response = await api.get(`/${pokemon}`)
    let image =  await response.data.sprites.versions['generation-v']['black-white']['animated']['front_default']
    
    setPokemonInfo(response)
    setImage(image)
  }

  return(
    <main>
      <div className='appContainer'>
        {image == '' &&(
          <section>
            <img className='Image' src='./image.jpeg'/>
            <h1 className='PokemonName'>Search...</h1>
          </section>
        )}

        {pokemonInfo.status == 200  &&(
          <section>
            <div className='PokemonInfoContainer'>
              <img className='Gif' src={image}/>
            </div>

            <h3 className='PokemonName'>{pokemonInfo.data.name.toUpperCase()} - {pokemonInfo.data.id}</h3>
          </section>
          )}

          <div className='DivContainer'>
            <form className='Form' onSubmit={SearchPokemon}>
              <input 
                className='Input' 
                onChange={HandleSearch} 
                type='search' 
                value = {input} 
                placeholder='id or name'  
                required
              />
            </form>

            {input.length > 1 &&(
              <div className='SuggestionsList'>
                {pokemons.map(element => (
                  <PokemonList 
                    className='SuggestionsItem' 
                    pokemon={element.name}
                    setInput={setInput}
                  />
                ))}
              </div>
            )}
          </div>
      </div>
    </main>
  )
}

export default App;