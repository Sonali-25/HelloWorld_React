import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


class App extends React.Component {
  render(){
    return(
    <div className= "app-main">
      <Router>
        <Switch>
          <Route exact path = "/home">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
  }
}
export default App;