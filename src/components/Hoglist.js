import React, { Component } from 'react';
import Hog from './Hog'

class Hoglist extends Component{


  render(){
    const allPiggies = this.props.hogs.map((hog)=>{
      return <Hog hog={hog} img={this.props.formatHogNameToImage(hog.name)} key={hog.name}/>
    })
    console.log(allPiggies)
    return(
      <div className="ui grid container">
        {allPiggies}
      </div>
    )
  }
}

export default Hoglist
