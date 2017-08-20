import React, { Component } from 'react';
import { connect } from 'react-redux'

class Categories extends Component {

  render(){

    const { categories } = this.props
    console.log(this.props)
    
    //map over categories and get id to LINK to category page

    return(
      <div>
       
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