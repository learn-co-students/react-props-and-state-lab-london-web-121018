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

  updateFilterState = (event) => {
    const filter = event.target.value
      this.setState({
        filters: {type: filter}
      });
  };

  fetchPets = () => {
    console.log('finding pets', this.state.filters.type)
    const filter = this.state.filters.type
    let url = ''

    switch (filter) {
      case 'dog':
        url = '/api/pets?type=dog'
        break;
      case 'cat':
        url = '/api/pets?type=cat'
        break;
      case 'micropig':
        url = '/api/pets?type=micropig'  
        break;
      default: url = '/api/pets'
        break;
    };



    fetch(url)
      .then(resp => resp.json())
      .then(jso => {
        this.setState(
            {pets: jso}
      )});
  }

  onAdoptPet = (id) => {
    console.log(id)
    const pets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    });

    this.setState({pets})
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateFilterState} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
