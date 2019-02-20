import React from 'react'
import Button from './Button'

class Pet extends React.Component {
  render() {
    const pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { pet.gender === 'female' ? '♀' : '♂' }
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <Button pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet} />
      </div>
    )
  }
}

export default Pet
