import React, { Component } from 'react'
import '../components/Pokecard.css'

const POKE_API = 
'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{this.props.name}</h1>
        <div className='Pokecard-list'>
          <li><img src={imgSrc} alt={this.props.name}/></li>
          <li>Type: {this.props.type}</li>
          <li>EXP: {this.props.exp}</li>
        </div>
      </div>  
    )
  }
}

export default Pokecard;