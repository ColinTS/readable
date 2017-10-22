import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogTitle,
} from 'material-ui/Dialog';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

export class AddPostDialog extends Component {

  handleRequestClose = () => {
    this.props.onRequestClose(false)
  };

  render() {
    return (
      <div>
        <Dialog open={this.props.open}>
          <DialogTitle>Add a Post</DialogTitle>
          <form id="postPost" onSubmit={ this.props.handleSubmit } >
              <Field placeholder="title "component="input" name="title"  />
              <Field placeholder="body" component="input" name="body"  />
          </form>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} form="postPost" type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps ({category}) {
  return {
      category
  }
}

AddPostDialog = reduxForm({
  form: 'postPost',
})(AddPostDialog)

export default connect(
  mapStateToProps
)(AddPostDialog)