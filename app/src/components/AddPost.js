import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import AddPostModal from './AddPostModal'

import Dialog, {
  DialogActions,
  DialogTitle,
} from 'material-ui/Dialog';
import { Field, reduxForm } from 'redux-form'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position:'fixed',
    right:0,
    bottom:0,
    marginRight: 50,
    marginBottom: 50,
  },
});

class AddPost extends Component {
  state = {
    open: false
  }
  handleClickOpen = () => {
    this.setState({open: true})
  }

  onRequestClose = () => {
    this.setState({open: false})
  }

  render(){
    const classes = this.props.classes;

    return (
      <div>
        <Button fab color="primary" aria-label="add" className={classes.button} onClick={this.handleClickOpen}>
          <AddIcon />
          <AddPostModal 
            open={this.state.open}
            onRequestClose={this.onRequestClose}
          />
        </Button>

      </div>
    );
  }
}

AddPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddPost);