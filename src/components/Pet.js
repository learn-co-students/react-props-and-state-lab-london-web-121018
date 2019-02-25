import React from 'react'

class Pet extends React.Component {

  isPetAdoptedButton = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button
      onClick={() => this.props.onAdoptPet(this.props.pet.id)} 
      className="ui primary button">Adopt pet</button>
    }
  }


  render() {
    const petData = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {petData.gender === 'female' ? '♀ ' : '♂ '}
            {petData.name}
          </a>
          <div className="meta">
            <span className="date">{petData.type}</span>
          </div>
          <div className="description">
            <p>Age: {petData.age}</p>
            <p>Weight: {petData.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.isPetAdoptedButton()}
            </div>
      </div>
    )
  }
}

export default Pet
