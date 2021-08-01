import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      title: 'Hello Bridgelabz From Sonali Jha'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}

export default App;
