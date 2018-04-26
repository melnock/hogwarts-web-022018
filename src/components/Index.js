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

  onFilter = ()=> {

  }

  onSort = ()=>{

  }

  formatHogNameToImage = (hog)=>{
    let imageRef = hog.replace(/\s/g, "_").toLowerCase()

    return `./hog-imgs/${imageRef}.jpg`
  }

  render(){
    console.log(this.state.hogs)
    return(
      <div>
        <Sort />
        <Filter filter = {this.state.filter} onFilter={this.onFilter}/>
        <Hoglist hogs = {this.state.hogs} formatHogNameToImage={this.formatHogNameToImage}/>
      </div>
    )
  }
}

export default Index
