import React, { Component } from 'react';
import '../index.css';

export default class Comments extends Component {

  render(){

    const {comment, index} = this.props
    
    return(
      <div className="commentContainer">
        <div id={`comment${index}`} className="comment">
          {comment.body}
        </div>
      </div>
    )
  }
}


