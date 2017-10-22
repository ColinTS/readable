import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import AddPostModal from './AddPostModal'
import { PostPostAction } from '../actions'
import { connect } from 'react-redux'
import * as helper from '../helpers.js'

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

  submitPost = (values) => {
    console.log(values)
    const post = {
      id: helper.generateID(),
      timestamp: helper.generateTimeStamp(),
      title: values.title,
      body: values.body,
      author: 'Colin',
      category: this.props.category
    }
    this.props.postPost(post)
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
            onSubmit={this.submitPost}
          />
        </Button>

      </div>
    );
  }
}

function mapStateToProps ({category}) {
  return {
      category
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postPost: (post) => dispatch(PostPostAction(post))
  }
}

AddPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddPost));