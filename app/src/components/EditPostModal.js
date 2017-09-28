import React, { Component } from 'react';
import { EditModalOnAction } from '../actions'
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogTitle,
} from 'material-ui/Dialog';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

export class EditFormDialog extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.props.modalOn()
  };
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Edit</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Edit your Post</DialogTitle>
          <form id="editPost" onSubmit={ this.props.handleSubmit }>
              <Field placeholder="title "component="input" name="title"  />
              <Field placeholder="body" component="input" name="body"  />
          </form>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} form="editPost" type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    modalOn: () => dispatch(EditModalOnAction()),
  }
}

EditFormDialog = reduxForm({
  form: 'editPost',
})(EditFormDialog)

export default connect(
  false,
  mapDispatchToProps,
)(EditFormDialog)