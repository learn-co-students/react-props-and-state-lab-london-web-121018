import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import { RSA_PKCS1_OAEP_PADDING } from 'constants';

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

  onAdoptPet = id => {
    const pets = this.state.pets.map(pet =>  id === pet.id ? {...pet, isAdopted: true} : pet
    )

    this.setState({
      pets
    })
  }

  onChangeType = (event ) => {
    this.setState({
      filters:{
        type: event.target.value
      }
    })
  }

  newPetsArray = (array) => {
    this.setState({
      pets: array
    })
  }

  onFindPetsClick = () => {
    const apiURL = this.state.filters.type === "all" ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`
    fetch(apiURL).then(resp => resp.json()).then(resp => this.newPetsArray(resp))
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
              <Filters 
              onChangeType={this.onChangeType} 
              onFindPetsClick={this.onFindPetsClick }
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
