import React, { Component } from 'react';
import Button from './components/Button';


class App extends Component {
  hello = () => console.log('Hello');
  world = () => console.log('World');
  exclamations = () => console.log('!!!');
  render() {
    return (
      <div>
        <Button func={this.hello} btnName='Hello' />
        <Button func={this.world} btnName='World' />
        <Button func={this.exclamations} btnName='!!!' />
      </div>
    )
  }
}

export default App