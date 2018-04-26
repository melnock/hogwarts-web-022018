import React, { Component } from 'react';


class Filter extends Component{
  handleChange = (e)=>{
    return this.props.onFilter(e.target.value)
  }

  render(){
    return(
      <div>
        <select onChange={this.handleChange}>
          <option value="all">All The Little Piggies</option>
          <option value="greased">Greasy, Slippery Piggies</option>
          <option value="all">Easiest To Catch Piggies, Maybe</option>
        </select>
      </div>
    )
  }
}

export default Filter
