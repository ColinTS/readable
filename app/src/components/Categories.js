import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Categories extends Component {

  render(){

    const { categories } = this.props
    console.log(categories.categories)

    return(
      <div className="categoryContainer">
        {categories && categories.map(category => 
          <Link key={category.name} to={`/categories/${category.name}`} className="categoryCard">{category.name}</Link>
        )}
      </div>
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories
  }
}

export default connect(
  mapStateToProps
)(Categories)