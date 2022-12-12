import React from 'react';
import Joke from './Joke';

class DadJoke extends React.Component {
  // async fetchJoke() {
  //   const { updateState } = this.props;
  //   const newFetch = async () => {
  //     const requestHeaders = { headers: { Accept: 'application/json' } }
  //     const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
  //     const requestObject = await requestReturn.json();
  //     updateState('loading', false)
  //     updateState('jokeObj', requestObject);
  //   }
  //   updateState('loading', true, newFetch)
  // }
  
  // componentDidMount() {
  //   const { fetchJoke } = this.props;
  //   fetchJoke();
  // }

  render() {
    const { dadJokes: { jokeObj, loading, storedJokes }, saveJoke } = this.props;
    const loadingElement = <span>Loading...</span>;
    // console.log('STORED JOKES', storedJokes)

    return (
      <div>
        <h1>Dad Jokes</h1>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {
        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */
        loading ? loadingElement : <Joke jokeObj={jokeObj} saveJoke={saveJoke} />
      }

      </div>
    );
  }
}

export default DadJoke;