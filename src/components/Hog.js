import React from 'react'

const Hog = (props) => {
  return(
      <div className="card">
        <div className='image'>
          <img  src={props.img} alt={props.hog.name}/>
        </div>
        <div className='content'>
          <p className='header'>{props.hog.name}</p>
          <div className='meta'>
            <p className='date'>{props.hog.greased ? "slippery piggy" : "not so slippery piggy"}</p>
          </div>
          <p className="description">Weight: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        </div>
      </div>
  )
}

export default Hog
