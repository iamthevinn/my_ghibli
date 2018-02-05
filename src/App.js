import React, { Component } from 'react';
import People from './People';
import Films from './Films';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Ghibli</h1>
        <People />
        <Films />
      </div>
    );
  }
}

export default App;

