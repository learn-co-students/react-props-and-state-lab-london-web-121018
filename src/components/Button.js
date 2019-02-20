import React from 'react'

class Button extends React.Component {

   handleClick = () => {
      this.props.onAdoptPet(this.props.pet.id);
   }



   render() {
      if(!this.props.isAdopted){
         return (
            <div className="extra content">
               <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
            </div>
         )
      } else {
         return (
         <div className="extra content">
            <button className="ui button">Already adopted</button>
         </div>
         )
      }
   }
}

export default Button