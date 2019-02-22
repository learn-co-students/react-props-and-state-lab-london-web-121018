import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
   
 const {onAdoptPet} = this.props

    return <div className="ui cards">
            {
               this.props.pets.map( pet => <Pet onAdoptPet={onAdoptPet} pet={pet} key={pet.id} isAdopted={pet.isAdopted}/>)
            } 
          </div>
  }
}

export default PetBrowser
