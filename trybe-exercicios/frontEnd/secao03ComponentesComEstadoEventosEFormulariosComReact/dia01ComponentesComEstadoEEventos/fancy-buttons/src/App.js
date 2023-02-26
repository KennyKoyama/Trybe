import React, { Component } from 'react';
import Button from './components/Button';


class App extends Component {

  state = {
    count: 0,
    color: 'inherit'
  }
  
  hello = () => console.log('Hello');
  world = () => console.log('World');
  exclamations = () => console.log('!!!');
  counter = () => this.setState((previous) => (
    {
      count: previous.count + 1,
      color: (previous.count + 1) % 2 === 0 ? 'green' : 'inherit'  
    }
    ));

  render() {
    const {count, color} = this.state;
    return (
      <div>
        <Button func={this.hello} btnName='Hello' />
        <Button func={this.world} btnName='World' />
        <Button func={this.exclamations} btnName='!!!' />
        <Button func={this.counter} btnName={count} btnStyle={color} />
      </div>
    )
  }
}

export default App