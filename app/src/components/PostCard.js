import React, { Component } from 'react';
import * as helper from '../helpers.js'
import { connect } from 'react-redux'
import uparrow from '../assets/uparrow.svg'
import downarrow from '../assets/downarrow.svg'
import Delete from '../assets/Delete.svg'
import Comments from './Comments'
import CommentForm from './CommentForm'
import EditPostModal from './EditPostModal'
import {LoadCommentsAction, PostCommentAction, PutPostAction} from '../actions'
import '../index.css';

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
        parentId: this.props.post.id 
    }
    this.props.postComment(comment)
}

editPostSubmit = (values) => {
    const post = {
        title: values.title,
        body: values.body,
        postID: this.props.post.id
    }
    this.props.editPost(post)
}

  render(){
    const { comments, post } = this.props
    const haveComments = comments.comments.length > 0
    return(

        <div className='postCard'>
            <div className="postControls"> 
                <object className='deletePost' type="image/svg+xml" data={Delete} alt="deletePost">delete</object>
                <object className="down-arrow"type="image/svg+xml" data={downarrow} alt="downarrow" aria-label="downarrow"></object>
                <div>{post.voteScore}</div>
                <object className="up-arrow"type="image/svg+xml" data={uparrow} alt="uparrow" aria-label="uparrow"></object>
                <EditPostModal 
                    onSubmit={this.editPostSubmit}
                />
            </div>
            <div className='postHeader'> 
                <div>{post.title}</div>
                <div>{post.author}</div>
            </div>
            <div className='postBody'> 
                <div>{post.body}</div> 
            </div>
            <div className='postComments'> 
                {comments && comments.comments.map((comment,index) => (
                    <Comments
                        index={index}
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
      postComment: (comment) => dispatch(PostCommentAction(comment)),
      editPost: (postID, post) => dispatch(PutPostAction(postID, post))
    }
  }

function mapStateToProps ({comments}) {
    return {
        comments
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostCard)