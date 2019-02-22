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

  onChangeType = newFilterString => {
    this.setState({ filters: {type: newFilterString } })
  }

  onAdoptPet = id => {
    const allPets = [...this.state.pets] // shallow copy, actually changing array
    const petToFind = allPets.find( pet => pet.id === id)
    const deepCopyPet = JSON.parse(JSON.stringify(petToFind))
    deepCopyPet.isAdopted = true

    const index = allPets.indexOf(petToFind)
    allPets[index] = deepCopyPet
    this.setState({pets: allPets})
  
  } 

  onFindPetsClick = () => {
    const type = this.state.filters.type
    const url = type === 'all'
    ? '/api/pets'
    : `/api/pets?type=${type}`
    fetch(url)
    .then(response => response.json())
    .then(pets => this.setState({ pets: pets }))
  }

  render() {
    console.log(this);
    const {onChangeType, onFindPetsClick, onAdoptPet} = this;
    const {pets} = this.state;

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={onChangeType}
              onFindPetsClick={onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
