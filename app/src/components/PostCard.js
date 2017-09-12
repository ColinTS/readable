import React, { Component } from 'react';
import * as API from '../utils/api.js'
import * as helper from '../helpers.js'
import { connect } from 'react-redux'
import uparrow from '../assets/uparrow.svg'
import downarrow from '../assets/downarrow.svg'
import Comments from './Comments'
import CommentForm from './CommentForm'
import {LoadCommentsAction, PostCommentAction} from '../actions'
import '../App.css';

class PostCard extends Component {

componentWillMount(){
    this.props.loadComments(this.props.post.id)
}

submit = (values) => {
    const comment = {
        body: values.comment,
        id: helper.generateID(),
        timestamp: helper.generateTimeStamp(),
        owner: 'Colin',
        parentID: this.props.post.id 
    }
    // const comment = values.comment
    const timestamp = helper.generateTimeStamp()
    const id = helper.generateID()
    const owner = 'Colin'
    const parentID = this.props.post.id
    // console.log(comment,id,timestamp, owner,parentID)
    this.props.postComment(comment)
}

  render(){
    const { comments, post } = this.props
    const haveComments = comments.comments.length > 0
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
                {comments && comments.comments.map((comment) => (
                    <Comments
                        comment={comment}
                        key={comment.id}
                    />
                ))}
                {!haveComments && <div>no comments</div>}
            </div>
            {<CommentForm
                onSubmit={this.submit}
            />}
        </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
    return {
      loadComments: (postID) => dispatch(LoadCommentsAction(postID)),
      postComment: (comment) => dispatch(PostCommentAction(comment))
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