import React, { Component } from 'react';

export default class Categories extends Component {

  render(){
    const categories = this.props.categories
    console.log(categories)
    
    //map over categories and get id to LINK to category page

    return(
      <div>
        {categories && categories.map((category) => (
          <div>{category.name}</div>
        ))}
      </div>
    )
  }
}