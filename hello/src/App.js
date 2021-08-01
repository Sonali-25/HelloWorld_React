import React from 'react';
import './App.css';
import logo from './assets/BL_Logo.png'


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
        <img src={logo}/>
      </div>
    )
  }
}

export default App;
