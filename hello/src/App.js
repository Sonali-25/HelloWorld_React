import React from 'react';
import './App.css';
import logo from './assets/BL_Logo.png'


class App extends React.Component {

  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      title: 'Hello Bridgelabz From Sonali Jha'
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick}/>
      </div>
    )
  }
}

export default App;
