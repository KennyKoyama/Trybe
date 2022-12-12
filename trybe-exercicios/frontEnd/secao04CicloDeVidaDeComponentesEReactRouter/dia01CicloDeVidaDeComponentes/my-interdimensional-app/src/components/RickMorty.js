import React, { Component } from 'react';

class RickMorty extends Component {
  fetchCharacters = () => {
    const { updateState } = this.props;
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then((data) => {
      updateState('characters', data.results)
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.props;
    return (
      <div className="RickMorty">
        <h1>Ricky and Morty Characters:</h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default RickMorty;
