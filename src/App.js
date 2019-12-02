// frontend
import React, { Component } from 'react';
import './App.css';
require('dotenv').config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      error: null
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(process.env.REACT_APP_VAR)
      const pets = await response.json()
      const petsArr = pets.pets
      console.log('arr', petsArr)
        this.setState({ pets: petsArr })
    } catch {
        this.setState({ error: 'The pets data can not be found.'})
    }
  }

  displayPets() {
    return this.state.pets.map((pet) => {
      return <li>{pet.name}</li>
    })
  }

  render() {
    return (
      <div>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.
        </small>
        <h1>Pets</h1>
        {this.displayPets()}
      </div>
    )
  }
}

export default App;
