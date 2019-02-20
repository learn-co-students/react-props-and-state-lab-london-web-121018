import React from 'react'

import Pet from './Pet'



class PetBrowser extends React.Component {
  petMap = () => {
    let petList = this.props.pets.map((pet) => { return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} /> })
    return petList
  }


  render() {
    return <div className="ui cards">
      {this.petMap()}
    </div>
  }
}

export default PetBrowser
