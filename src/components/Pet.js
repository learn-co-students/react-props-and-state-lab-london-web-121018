import React from 'react'

class Pet extends React.Component {

  handleGender(gender) {
    if (gender === "male") {
      return '♂'
    } else {
      return '♀'
    }
  }

  handleAdopted() {
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={event => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.handleGender(this.props.pet.gender)}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.handleAdopted()}
        </div>
      </div>
    )
  }
}

export default Pet
