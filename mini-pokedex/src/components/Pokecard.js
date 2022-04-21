import React, { Component } from 'react'
import './Pokecard.css'

const POKE_ASSET = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail";

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_ASSET}/${String(this.props.id).padStart(3, '0')}.png`
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{this.props.name}</h1>
        <div className='Pokecard-list'>
          <li><img className='Pokecard-img' src={imgSrc} alt={this.props.name}/></li>
          <li>Type: {this.props.type}</li>
          <li>EXP: {this.props.exp}</li>
        </div>
      </div>  
    )
  }
}

export default Pokecard;