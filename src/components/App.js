import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  updateType = (type) => {
    this.setState({
      filters:{
        type
      }
    })
  }

  retrievePets = () => {
    switch (this.state.filters.type) {
      case 'cat':
        fetch(`/api/pets?type=cat`)
        .then(resp => resp.json())
        .then(pets => this.setState({pets,filters: this.state.filters}))
        break;
      case 'dog':
        fetch(`/api/pets?type=dog`)
        .then(resp => resp.json())
        .then(pets => this.setState({pets,filters: this.state.filters}))
        break;
      case 'micropig':
        fetch(`/api/pets?type=micropig`)
        .then(resp => resp.json())
        .then(pets => this.setState({pets,filters: this.state.filters}))
        break;
      default:
        fetch(`/api/pets`)
        .then(resp => resp.json())
        .then(pets => this.setState({pets,filters: this.state.filters}))
        break;
    }
  }

  adoptPet = (adopted) =>{
    const toAdopt = this.state.pets.find(pet => pet.id === adopted)
    toAdopt.isAdopted = true;
    this.setState({
      pets: [...this.state.pets]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateType} onFindPetsClick={this.retrievePets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
