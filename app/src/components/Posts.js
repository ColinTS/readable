import React, { Component } from 'react';
import * as API from '../utils/api.js'
import {LoadPosts} from '../actions'
import { connect } from 'react-redux'
import PostCard from './PostCard'

class Posts extends Component {

componentWillMount(){
    API.getPosts(this.props.match.params.name)
    .then((data) => {
        this.props.fetchPosts(data)
        console.log(data)
    })
}

  render(){
    const { posts } = this.props
    console.log('posts',posts)

    return(
      <div className="postContainer">
        {posts && posts.posts.map((post) => (
          <PostCard 
            post={post}
            key={post.id}
          />
        ))}
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
