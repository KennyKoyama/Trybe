import React, { Component } from 'react';
import './App.css';
import DadJoke from './components/DadJoke';
import RickMorty from './components/RickMorty';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  updateState = (key, value ) => this.setState({ [key]: value });

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <DadJoke />
        <RickMorty
          characters={ characters }
          updateState={ this.updateState }
        />
      </div>
    );
  }
}

export default App;
