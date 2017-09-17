import React, { Component } from 'react';
import { Field, reset, reduxForm } from 'redux-form'

const afterSubmit = (result, dispatch) =>
  dispatch(reset('comment'));

class CommentForm extends Component {

  render(){

    return(
      <div className="commentFormContainer">
        <form onSubmit={ this.props.handleSubmit }>
            <div>
                <label htmlFor="comment">Add a comment</label>
                <Field name="comment" component="input" type="comment" />
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

CommentForm = reduxForm({
    form: 'comment',
    onSubmitSuccess: afterSubmit
  })(CommentForm)

export default CommentForm;
  