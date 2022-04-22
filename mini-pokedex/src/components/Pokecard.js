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
          <div className='Pokecard-circle-img'>
            <img className='Pokecard-img' src={imgSrc} alt={this.props.name}/>
          </div>
          <div>Type: {this.props.type}</div>
          <div>EXP: {this.props.exp}</div>
        </div>
      </div>  
    )
  }
}

export default Pokecard;