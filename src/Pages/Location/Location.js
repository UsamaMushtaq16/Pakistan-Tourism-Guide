import React from 'react'
import './Location.css'
import locationImage from '../../assets/LocationAssets/Location.png'

const Location = () => {
  return (
    <section className='location-div'>
        <h1>
            <span>See Your </span>
            <span>Current Location</span>
        </h1>
        <p className='location-p'>See where you are currently and get help through the map to reach your destination.</p>
        <div className='map-img'>
            <img src={locationImage} alt=''/>
        </div>
    </section>
  )
}

export default Location