import React, { Component } from 'react';
import {LoadPostsAction} from '../actions'
import { connect } from 'react-redux'
import PostCard from './PostCard'

class Posts extends Component {

componentWillMount(){
    const categoryName = this.props.match.params.name
    this.props.loadPosts(categoryName)
}

  render(){
    const { posts } = this.props

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
      loadPosts: (category) => dispatch(LoadPostsAction(category)),
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
