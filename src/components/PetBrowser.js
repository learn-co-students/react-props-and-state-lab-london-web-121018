import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


   petsElArray = () => { return this.props.pets.map((pet) => {
    return <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} key={pet.id}/>
  })
}
  
  render() {
    return <div className="ui cards">
    {this.petsElArray()}
    </div>
  }
}

export default PetBrowser
