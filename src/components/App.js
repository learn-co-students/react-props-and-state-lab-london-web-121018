import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onAdoptPet = petId => {
    let aPet = this.state.pets.filter(pet => {
      return petId === pet.id
    })[0]

    aPet.isAdopted = true
    // let indexOfAPet = this.state.pets.indexOf(aPet)

    this.setState(
      {
        pets: [...this.state.pets]
      },
      console.log(this.state.pets)
    )
  }

  onChangeType = term => {
    this.setState({
      filters: { ...this.state.filters, type: term }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      return fetch('/api/pets')
        .then(resp => resp.json())
        .then(pets => this.setState({ pets: pets }))
    } else {
      return fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(pets => this.setState({ pets: pets }))
    }
  }

  render () {
    return (
      <div className='ui container'>
        <header>
          <h1 className='ui dividing header'>React Animal Shelter</h1>
        </header>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className='twelve wide column'>
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
