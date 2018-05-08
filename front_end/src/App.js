import React, { Component } from 'react';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import camera from './camera.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gavilan Computer Science Club Pizza or Not Pizza App</h1>
        </header>
        <p className="App-intro">
          First iteration of the Front End portion. Code is found at: <code>front_end/src/App.js</code>.  
        </p>
        <p>
        <input type="image" className="myImage" id="Use this for Cloud Vision API" src={camera}/>
        </p>
      </div>
    );
  }
}


export default App;
