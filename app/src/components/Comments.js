import React, { Component } from 'react';

export default class Comments extends Component {

  render(){

    const {comment} = this.props

    return(
      <div className="commentContainer">
        <hr></hr>
        {comment.body}
      </div>
    )
  }
}


