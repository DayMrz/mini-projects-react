import React, {Component} from 'react'
import Pokecard from './Pokecard'
import '../components/Pokedex.css'

class Pokedex extends Component {
  render() {
    let title;
    if(this.props.isWinner){
      title = <h1 className='Winner Pokedex-result'>Winning Hand</h1>
    } else {
      title = <h1 className='Loser Pokedex-result'>Losing Hand</h1>
    }
    return (
      <div className='Pokedex'>
        <div className='Pokedex-total-box'>
          <div>
            <h2>Pokedex</h2>
            <p>Total Exp: {this.props.exp}</p>
          </div>
          <div>
            {title}
          </div>
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