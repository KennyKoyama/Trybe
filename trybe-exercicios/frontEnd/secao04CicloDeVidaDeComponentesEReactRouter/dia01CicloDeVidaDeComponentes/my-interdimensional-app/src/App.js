import React, { Component } from 'react';
import './App.css';
import DadJoke from './components/DadJoke';
import RickMorty from './components/RickMorty';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        rickMorty: { characters: [] },
        dadJokes: {
          jokeObj: undefined,
          loading: true,
          storedJokes: [],
        },
    };
  }

  updateState = (key, sub, value) => this.setState((prev) => ({ [key]: {...prev[key], [sub]: value } }))
  updateState2 = (key, sub, value, sub2, value2) => this.setState((prev) => ({ [key]: {...prev[key], [sub]: value, [sub2]: value2 } }))

  render() {
    const { rickMorty, dadJokes } = this.state;
    return (
      <div className="App">
        {/* <RickMorty
          rickMorty={ rickMorty }
          updateState={ this.updateState }
        /> */}
        <DadJoke
          dadJokes={ dadJokes }
          updateState={ this.updateState2 }
        />
      </div>
    );
  }
}

export default App;
