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

  getPets = (pets) => {
    this.setState({
      pets: [...pets],
    })
  }

  onChangeType = (searchInput) => {
    this.setState({
      filters: {
        type: searchInput
      }
    })
  }

  onAdoptPet = (petId) => {
    let petSelected = this.state.pets.filter( pet => pet.id === petId )[0];
    petSelected.isAdopted = true;
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
              <Filters onChangeType={this.onChangeType} getPets={this.getPets} />
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
