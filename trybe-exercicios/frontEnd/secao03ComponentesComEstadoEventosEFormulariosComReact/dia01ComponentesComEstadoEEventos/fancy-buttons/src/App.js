import React, { Component } from 'react';
import Button from './components/Button';

const hello = () => console.log('Hello');
const world = () => console.log('World');
const exclamations = () => console.log('!!!');

class App extends Component {
  render() {
    return (
      <div>
        <Button func={hello} btnName='Hello' />
        <Button func={world} btnName='World' />
        <Button func={exclamations} btnName='!!!' />
      </div>
    )
  }
}

export default App