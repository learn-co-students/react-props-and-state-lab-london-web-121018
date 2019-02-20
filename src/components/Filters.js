import React from 'react'

class Filters extends React.Component {

  constructor() {
    super();
    this.state = {
      optionSelected: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      optionSelected: event.target.value
    });
  }

  onFindPetsClick = () => {
    const searchInput = this.state.optionSelected;
    if (searchInput === 'all' || searchInput === '' ) {
      this.props.onChangeType('all');
      return fetch(`/api/pets`)
        .then(resp => resp.json())
        .then(this.props.getPets)
    } else {
      this.props.onChangeType(searchInput);
      return fetch(`/api/pets?type=${searchInput}`)
        .then(resp => resp.json())
        .then(this.props.getPets)
    }
  }

  componentDidMount = () => {
    this.props.onChangeType('all');
    return fetch(`/api/pets`)
      .then(resp => resp.json())
      .then(this.props.getPets)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value={this.state.value} onChange={this.handleChange} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
