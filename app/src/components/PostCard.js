import React, { Component } from 'react';
import * as API from '../utils/api.js'
import { connect } from 'react-redux'
import uparrow from '../assets/uparrow.svg'
import downarrow from '../assets/downarrow.svg'
import Comments from './Comments'
import {LoadCommentsAction} from '../actions'
import '../App.css';

class PostCard extends Component {

componentWillMount(){
    this.props.loadComments(this.props.post.id)
}

  render(){
    const { comments, post } = this.props
    const haveComments = comments.length > 0
    console.log('COM', comments)
    return(

        <div className='postCard'>
            <div className='deletePost'>delete</div>
            <div className='postHeader'> 
                <object className="up-arrow"type="image/svg+xml" data={uparrow} alt="uparrow"></object>
                <object className="down-arrow"type="image/svg+xml" data={downarrow} alt="downarrow"></object>
                <div>{post.voteScore}</div>
                <div>{post.title}</div>
                <div>{post.author}</div>
            </div>
            <div className='postBody'> 
                <div>{post.body}</div> 
            </div>
            <div className='postComments'> 
                {comments && comments.map((comment) => (
                    <Comments
                        comment={comment}
                        key={comment.id}
                    />
                ))}
                {!haveComments && <div>no comments</div>}
            </div>
            <div className='commentForm'> 
                           
            </div>
        </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
    return {
      loadComments: (postID) => dispatch(LoadCommentsAction(postID)),
    }
  }

function mapStateToProps ({comments}) {
    return {
        comments
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostCard)