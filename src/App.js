import { useState } from 'react';
import './App.css';
import { FiSearch } from 'react-icons/fi'

import api from './services/api';

function App() {
  const[input, setInput] = useState()
  const[pokemonInfo, setPokemonInfo] = useState({})
  const[image, setImage] = useState('')

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
      <div className='Container'>
        {image == '' &&(
          <img className='Image' src='./image.jpeg'/>
        )}

        {pokemonInfo.status == 200  &&(
            <div className='PokemonInfoContainer'>
              <img className='Image' src={image}/>
              <h3>{pokemonInfo.data.name.toUpperCase()} - {pokemonInfo.data.id}</h3>
            </div>
          )}

        <form className='Form' onSubmit={SearchPokemon}>
          <input className='Input' onChange={e => setInput(e.target.value)} type='search' value={input} placeholder='id or name' required/>
          <button className='Button'><FiSearch className='Icon'/></button>
        </form>
      </div>
    </main>
  )
}

export default App;
