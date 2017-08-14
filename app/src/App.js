import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch('http://localhost:5001/categories', {
      headers: { Authorization: 'yo' }
    })
      .then((res) => res.json())
      .then((categories) => {
      console.log(categories)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
