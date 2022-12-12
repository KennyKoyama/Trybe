import React, { Component } from 'react';
import './App.css';
import DadJoke from './components/DadJoke';
import RickMorty from './components/RickMorty';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
        jokeObj: undefined,
        loading: true,
        storedJokes: [],
    };
  }

  updateState = (key, value, second) => this.setState({ [key]: value });

  async fetchJoke() {
    this.setState(
      {loading: true},
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          jokeObj: requestObject
        })
      })
  }

  saveJoke = () => {
    this.setState(({ storedJokes, jokeObj }) => (
      { storedJokes: [...storedJokes, jokeObj]}
    ))
    this.fetchJoke()
  };

  componentDidMount() {
    this.fetchJoke()
  }

  render() {
    const { characters, jokeObj, loading, storedJokes } = this.state;
    return (
      <div className="App">
        <DadJoke
          dadJokes={ {jokeObj, loading, storedJokes} }
          fetchJoke={ this.fetchJoke }
          saveJoke= { this.saveJoke }
        />
        <RickMorty
          characters={ characters }
          updateState={ this.updateState }
        />
      </div>
    );
  }
}

export default App;
