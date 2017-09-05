import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import * as API from './utils/api.js'
import Categories from './components/Categories'
import Posts from './components/Posts'
import {LoadCategoriesAction} from './actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class App extends Component {

  componentWillMount(){
    this.props.loadCategories()
  }

  render() {

    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <Route exact path ='/' render={() => (
            <Categories />
          )} />

          <Route path ='/categories/:name' component={Posts} />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCategories: () => dispatch(LoadCategoriesAction()),
  }
}

export default withRouter(connect(
  false,
  mapDispatchToProps
)(App))
