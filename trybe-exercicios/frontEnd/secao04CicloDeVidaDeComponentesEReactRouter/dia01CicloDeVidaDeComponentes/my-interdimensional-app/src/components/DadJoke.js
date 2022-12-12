import React from 'react';

class DadJoke extends React.Component {
  async fetchJoke() {
    const { updateState } = this.props;
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    updateState('dadJokes', 'jokeObj', requestObject, 'loading', true);
    this.saveJoke()
  }
  
  componentDidMount() {
    const { updateState } = this.props;
    // updateState('dadJokes', 'loading', true);
    this.fetchJoke();
    // updateState('dadJokes', 'loading', false);
  }

  saveJoke() {
    // Esse método será responsável por salvar a piada no array de piadas storedJokes!!
    const { dadJokes, dadJokes: { jokeObj, loading,  storedJokes }, updateState } = this.props;
    if (jokeObj) {
      updateState('dadJokes', 'storedJokes', [...storedJokes, jokeObj], 'loading', false);
      // console.log('SAVED')
    }
  }

  render() {
    const { dadJokes, dadJokes: { jokeObj, loading, storedJokes } } = this.props;
    const loadingElement = <span>Loading...</span>;
    console.log('STORED JOKES', storedJokes)

    return (
      <div>
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
        loading && loadingElement
      }

      </div>
    );
  }
}

export default DadJoke;