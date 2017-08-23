import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import * as API from './utils/api.js'
import Categories from './components/Categories'
import Posts from './components/Posts'
import LoadCategories from './actions'
import { connect } from 'react-redux'

class App extends Component {

  //  componentWillMount(){
  //    API.getCategories()
  //    .then((data) => {
  //      LoadCategories(data)
  //    })
  //  }

  render() {
    const { fetchCategories } = this.props

    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <Route exact path ='/' render={() => (
            <Categories
              categories={
                API.getCategories()
                  .then((data) => {
                    fetchCategories(data)
                  })
              }
            />
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
    fetchCategories: (data) => dispatch(LoadCategories(data)),
  }
}


export default connect(
  mapDispatchToProps
)(App)
