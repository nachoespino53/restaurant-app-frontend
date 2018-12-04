import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
// import Bulma from 'react-bulma-components/full';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <br/>
      <div className="columns is-variable is-5">
          <div className="column  has-background-grey-lighter"></div>
          <div className="column is-half  has-background-grey-lighter"></div>
          <div className="column  has-background-grey-lighter"></div>
      </div>
      </div>
    );
  }
}

export default App;
