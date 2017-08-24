import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return <p> Welcome to React Adventure!</p>;
  }
}

render(<App/>, document.getElementById('app'));
