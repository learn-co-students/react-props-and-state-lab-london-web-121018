import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    });
  };

  onFindPetsClick = () => {
    const apiURL =
      this.state.filters.type === "all"
        ? "/api/pets"
        : `/api/pets?type=${this.state.filters.type}`;

    fetch(apiURL)
      .then(res => res.json())
      .then(data => this.setState({ pets: data }));
  };

  onAdoptPet = id => {
    const pets = this.state.pets.map(pet =>
      id === pet.id ? { ...pet, isAdopted: true } : pet
    );

    // const newPets = [...this.state.pets];
    // const foundPet = newPets.find(pet => pet.id === id);
    // // const foundPetCopy = JSON.parse(JSON.stringify(foundPet))
    // // not gonna work if there are funcs
    // const foundPetCopy = { ...foundPet };
    // foundPetCopy.isAdopted = true;
    // const index = newPets.findIndex(foundPet);
    // newPets[index] = foundPetCopy;

    this.setState({
      pets: pets
    });
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
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
