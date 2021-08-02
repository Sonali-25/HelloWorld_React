import React from 'react';
import './App.css';
import logo from './assets/BL_Logo.png'


class App extends React.Component {

  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      userName: '',
      nameError: ''
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value })
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: '' })
    } else {
      this.setState({ nameError: 'Name is InCorrect' })
    }
  }
  render() {
    return (
      <>
        <div className="app-main">
          <div className="main">
            <h1>Hello {this.state.userName} From Bridgelabz</h1>
            <img src={logo} onClick={this.onClick} />
            <div className="text-box">
              <input onChange={this.onNameChange} />
              <span className="error-output">{this.state.nameError}</span>
            </div>
            <div>
              <p>At Bridgelabz, we're a community of</p>

              <ul>
                <li>technologies</li>
                <li>thinkers</li>
                <li>builders</li>
              </ul>
              <p> Working together to keep the Tech Employability of Engineers alive and accessible, so Tech Companies worldwide can get contributors and creators for Tchnology Solutions. We belive this act of human collaboration across an employability platform is essential to individual growth and our collective future.</p>
              <br></br>
              <p> To Know about us, visit <a href="https://www.bridgelabz.com">Bridgelabz</a> to learn even more about our mission <br></br> <b>i.e. Employability To All.</b></p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
