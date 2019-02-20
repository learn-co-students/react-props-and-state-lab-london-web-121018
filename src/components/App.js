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

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  fetchPets = (type) => {
    if (type === "all") {
      fetch('/api/pets').then((resp) => { return resp.json() }).then((pets) => { this.savePets(pets) })
    } else {
      fetch(`/api/pets?type=${type}`).then((resp) => { return resp.json() }).then((pets) => { this.savePets(pets) })
    }
  }
  savePets = (pets) => {
    this.setState({
      pets: pets
    })
  }

  onFindPetsClick = () => {
    this.fetchPets(this.state.filters.type)
  }

  onAdoptPet = (petID) => {
    let selectedPet = this.state.pets.find(pet => pet.id === petID)
    selectedPet.isAdopted = true
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
