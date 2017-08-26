import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import * as API from './utils/api.js'
import Categories from './components/Categories'
import Posts from './components/Posts'
import {LoadCategories} from './actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class App extends Component {

   componentWillMount(){
     API.getCategories()
     .then((data) => {
       this.props.fetchCategories(data)
     })

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
    fetchCategories: (data) => dispatch(LoadCategories(data)),
  }
}


export default withRouter(connect(
  false,
  mapDispatchToProps
)(App))
