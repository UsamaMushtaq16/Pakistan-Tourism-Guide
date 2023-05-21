import React from 'react'
import './Location.css'
 
const Location = () => {
  return (
    <section className='location-div'>
      <h1>
        <span>See Your </span>
        <span>Current Location</span>
      </h1>
      <p className='location-p'>See where you are currently and get help through the map to reach your destination.</p>
      <div className='map'>

        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              title='mymap'
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=UET Lahore&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
             
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Location