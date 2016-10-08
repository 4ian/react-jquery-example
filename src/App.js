import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";

class App extends Component {
  componentDidMount() {
    // Here is a quick example if you (really want to) use jQuery
    // with React :)
    setTimeout(() => {
      $(this.refs.intro).slideUp();
    }, 200);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" ref="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
