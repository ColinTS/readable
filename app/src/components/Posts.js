import React, { Component } from 'react';
import {LoadPostsAction, SetCategoryAction} from '../actions'
import { connect } from 'react-redux'
import PostCard from './PostCard'
import AddPost from './AddPost'

import '../index.css';

class Posts extends Component {

componentWillMount(){
    const categoryName = this.props.match.params.name
    this.props.setCategory(categoryName)
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
        <AddPost />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
    return {
      loadPosts: (category) => dispatch(LoadPostsAction(category)),
      setCategory: (category) => dispatch(SetCategoryAction(category))
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
