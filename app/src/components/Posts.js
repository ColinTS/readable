import React, { Component } from 'react';
import * as API from '../utils/api.js'
import {LoadPosts} from '../actions'
import { connect } from 'react-redux'

class Posts extends Component {

componentWillMount(){
    API.getPosts(this.props.match.params.name)
    .then((data) => {
        this.props.fetchPosts(data)
        console.log(data)
    })
}

  render(){
    //   console.log(this.props)
    const { posts } = this.props

    return(
      <div className="postsContainer">
       hey
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
    return {
      fetchPosts: (posts) => dispatch(LoadPosts(posts)),
    }
  }

function mapStateToProps ({posts}) {
    return {
        posts
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Posts)
