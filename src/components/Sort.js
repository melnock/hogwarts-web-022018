import React, { Component } from 'react';


class Sort extends Component{
  handleChange = (e) => {
    this.props.onSort(e.target.value)
  }

  render(){
    return(
      <div>
        <p>Sort</p>
        <select onChange={this.handleChange}>
          <option value="name">Name</option>
          <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">Weight</option>
          <option value="specialty">Specialty</option>
          <option value="highest medal achieved">Highest Medal</option>
        </select>
      </div>
    )
  }
}

export default Sort
