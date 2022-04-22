import React, { Component } from 'react'
import Pokedex from './Pokedex'

const mainTitle = 'https://th.bing.com/th/id/R.d3aa8ed7f6fbfae69aab6758989afafc?rik=AJaSqNz5gPJMHg&riu=http%3a%2f%2fpokegame.org%2fwp-content%2fuploads%2f2015%2f05%2fLOGO.png&ehk=uizc1FA3fxdfiXbSGP%2bHeeTUC5s%2bHMz0MQ%2bInCT5uIQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'

const POKE_API = "https://pokeapi.co/api/v2/pokemon";


class Pokegame extends Component {
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
  };

  render() {
    let hand1 = []
    let hand2 = [ ...this.props.pokemon ]
    while(hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
    return(
      <div className='Pokegame'>
        <div className='Pokegame-title-box'>
          <img className='Pokegame-main-title' src={mainTitle} alt='Pokedex'/>
        </div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    )
  }
}

export default Pokegame;