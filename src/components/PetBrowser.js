import React, {Component} from 'react';

import Pet from './Pet';

class PetBrowser extends Component {
  render() {
    const pets = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}  />
      ));
    return <div className="ui cards">{pets}</div>
  }
}

export default PetBrowser;
