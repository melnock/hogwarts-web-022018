import React, { Component } from 'react';
import Hog from './Hog'

class Hoglist extends Component{


  render(){
    const allPiggies = this.props.hogs.map((hog)=>{
      return <Hog hog={hog} img={this.props.formatHogNameToImage(hog.name)} key={hog.name}/>
    })
    return(
      <div className="ui container">
        <div className="ui fluid four wide column cards">

          {allPiggies}
        </div>
      </div>
    )
  }
}

export default Hoglist
