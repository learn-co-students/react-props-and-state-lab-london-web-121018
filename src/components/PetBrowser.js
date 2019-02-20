import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    const petsCards = this.props.pets.map(pet => (
      <Pet petData={pet} onAdoptPet={this.props.onAdoptPet} />
    ));
    return <div className="ui cards">{petsCards}</div>;
  }
}

export default PetBrowser;
