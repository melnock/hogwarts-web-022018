import React, { Component } from 'react';
import Sort from './Sort'
import Filter from './Filter'
import Hoglist from './Hoglist'
import hogs from '../porkers_data.js'
class Index extends Component{

  state= {
    hogs: [],
    filter: 'all',
    sort: 'name',
  }

  componentDidMount(){
    this.setState({
      hogs: hogs
    })
  }

  onFilter = (filterChoice)=> {
    const filteredHogs = filterChoice === 'all' ? hogs : hogs.filter(hog=>hog.greased == filterChoice)
    this.setState({
      hogs: filteredHogs
    })
  }


  onSort = (pigPropToSortBy)=>{
    this.setState({
      sort: pigPropToSortBy
    })
  }

  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }

  formatHogNameToImage = (hog)=>{
    let imageRef = hog.replace(/\s/g, "_").toLowerCase()
    return (`/hog-imgs/${imageRef}.jpg`)
  }

  render(){
    console.log(this.state.hogs)
    return(
      <div>
        <Sort onSort={this.onSort}/>
        <Filter filter = {this.state.filter} onFilter={this.onFilter}/>
        <Hoglist hogs = {this.state.hogs.sort(this.dynamicSort(this.state.sort))} formatHogNameToImage={this.formatHogNameToImage}/>
      </div>
    )
  }
}

export default Index
