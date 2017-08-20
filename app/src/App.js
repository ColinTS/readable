import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import * as API from './utils/api.js'
import Categories from './components/Categories'
import Posts from './components/Posts'
import LoadCategories from './actions'

class App extends Component {

   componentWillMount(){
     API.getCategories()
     .then((data) => {
        this.props.store.dispatch(LoadCategories(data))
     })
   }

  render() {

    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <Route exact path ='/' render={() => (
            <Categories/>
          )} />

          <Route path ='/categories/:id' render={() => (
            <Posts/>
          )} />
      </div>
    );
  }
}

export default App
