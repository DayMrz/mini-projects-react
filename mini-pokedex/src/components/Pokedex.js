import React, {Component} from 'react'
import Pokecard from './Pokecard'
import '../components/Pokedex.css'

const mainTitle = 'https://th.bing.com/th/id/R.5409c5a012ff2dbe5a895c4f067dacdf?rik=eFLgLYCyZCvR2Q&riu=http%3a%2f%2fimg1.wikia.nocookie.net%2f__cb20130927133418%2fpokemon%2ffr%2fimages%2f1%2f1b%2fPokedex_logo.png&ehk=mhq2CI0CjFhlxc0%2bV9kx%2fQdUmcg9WcNgs6M5WTFmCUo%3d&risl=&pid=ImgRaw&r=0'

class Pokedex extends Component {
  static defaultProps = {
    pokemon : [
    {id: 4, name:'Charmander', type: 'fire', base_experience: 62 },
    {id: 7, name:'Squirtle', type: 'water', base_experience: 63 },
    {id: 11, name:'Metapod', type: 'bug', base_experience: 72 },
    {id: 12, name:'Butterfree', type: 'flying', base_experience: 178 },
    {id: 25, name:'Pikachu', type: 'electric', base_experience: 112 },
    {id: 39, name:'Jigglypuff', type: 'normal', base_experience: 95 },
    {id: 94, name:'Gengar', type: 'poison', base_experience: 225 },
    {id: 133, name:'Eevee', type: 'normal', base_experience: 65 }
    ]
  }
  render() {
    return (
      <div className='Pokedex'>
        <div className='Pokedex-title-box'>
          <img className='Pokedex-main-title' src={mainTitle} alt='Pokedex'/>
        </div>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map((p) => (
            <Pokecard 
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience} 
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;