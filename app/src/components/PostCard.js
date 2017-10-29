import React, { Component } from 'react';
import * as helper from '../helpers.js'
import { connect } from 'react-redux'
import Comments from './Comments'
import CommentForm from './CommentForm'
import EditPostModal from './EditPostModal'
import {LoadCommentsAction, PostCommentAction, PutPostAction, DownPostAction, UpPostAction, DeletePostAction} from '../actions'
import Button from 'material-ui/Button';
import ArrowDropUp from 'material-ui-icons/ArrowDropUp'
import ArrowDropDown from 'material-ui-icons/ArrowDropDown'

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

downVote = () => {
    this.props.downPost(this.props.post.id)
}

upVote = () => {
    this.props.upPost(this.props.post.id)
}

deletePost = () => {
    this.props.deletePost(this.props.post.id)
}

  render(){
    const { comments, post } = this.props
    const haveComments = comments.comments.length > 0
    return(

        <div className='postCard'>
            <div className="postControls"> 
                <Button onClick={this.deletePost} className='deletePost'>delete</Button>
                <Button onClick={this.downVote}>
                    <ArrowDropDown />
                </Button>
                <div>{post.voteScore}</div>
                <Button onClick={this.upVote}>
                    <ArrowDropUp />
                </Button>
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
      editPost: (postID, post) => dispatch(PutPostAction(postID, post)),
      downPost: (postID) => dispatch(DownPostAction(postID)),
      upPost: (postID) => dispatch(UpPostAction(postID)),
      deletePost: (postID) => dispatch(DeletePostAction(postID))
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