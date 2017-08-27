import React, { Component } from 'react';
import * as API from '../utils/api.js'
import { connect } from 'react-redux'

export default class PostCard extends Component {

  render(){
      const { post } = this.props
      console.log(post.score)

    return(
        <div className='postCard'>
            <div className='deletePost'>delete</div>
            <div className='postHeader'> 
                <object type="image/svg+xml" data="../assets/uparrow.svg"></object>
                <div>{post.voteScore}</div>
                <div>{post.title}</div>
                <div>{post.author}</div>
            </div>
            <div className='postBody'> 
                <div>{post.body}</div> 
            </div>
            <div className='postComments'> 
                    
            </div>
            <div className='commentForm'> 
                           
            </div>
        </div>
    )
  }
}