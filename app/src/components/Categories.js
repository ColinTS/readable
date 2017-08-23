import React, { Component } from 'react';
import { connect } from 'react-redux'


class Categories extends Component {

  render(){

    const { categories } = this.props
    console.log(categories)

    return(
      <div>
        {categories && categories.map(category => 
          <div>{category.name}</div>
        )}
      </div>
    )
  }
}

function mapStateToProps (categories) {
  return {
    categories
  }
}

export default connect(
  mapStateToProps
)(Categories)