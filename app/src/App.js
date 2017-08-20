import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import * as API from './utils/api.js'
import Categories from './components/Categories'
import Posts from './components/Posts'
import { connect } from 'react-redux'
import LoadCategories from './actions'

class App extends Component {

   componentWillMount(){
     loadCats(API.getCategories())
   }

  render() {
    const { loadCats } = this.props

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

function mapDispatchToProps (dispatch) {
  return {
    loadCats: (categories) => dispatch(LoadCategories(categories)),
  }
}

export default connect(
  mapDispatchToProps
)(App)
