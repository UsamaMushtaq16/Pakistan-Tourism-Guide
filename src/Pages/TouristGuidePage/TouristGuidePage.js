import React from 'react'
import Notification from '../NotificationBar/Notification'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./TouristGuidePage.css";
import filteredTouristGuideData from "./FilteredTouristGuideData";
import FilteredTouristGuide from './FilteredTouristGuide';


export default function TouristGuidePage() {
  return (
    <>
      <Notification />
      <Navbar />
      <div className='Container-tourist-guide'>
        <div className='tour-Container2'>

          <div className='tourist-guide-form-sec'>
            <h1>Find the Tourist Guide</h1>
            <form class="row gx-3 gy-2 align-items-center">
              <div class="col">
                <label class="visual" for="specificSizeInputName">City</label>
                <select class="form-select" id="specificSizeSelect">
                  <option selected>Choose...</option>
                  <option value="1">Islamabad</option>
                  <option value="2">Lahore</option>
                  <option value="3">Muree</option>
                  <option value="4">Swat</option>
                </select>

              </div>
              <div class="col">
                <label class="visual" for="specificSizeSelect">Guidance Duration</label>
                <select class="form-select" id="specificSizeSelect">
                  <option selected>Choose...</option>
                  <option value="1">1 Day</option>
                  <option value="2">10 Hours</option>
                  <option value="3">6 Hours</option>
                  <option value="3">2 Days</option>
                </select>

              </div>




              <div class="buton">
                <button type="submit" class="btn btn-outline-light">Search Tourist Guide</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='transport'>
        <span>Book Your&nbsp;</span>
        <span>Tourist Guide</span>
        <br /><br />

      </div>

      <div className='tour-filter'>
        <div className='city'>
          <select>
            <option selected>City</option>
            <option value="1">Islamabad</option>
            <option value="2">Lahore</option>
            <option value="3">Muree</option>
            <option value="4">Swat</option>
          </select>
        </div>
        <div className='reviews'>
          <span>Top Reviews</span>
        </div>

        <div className='hotel-type'>
          <select>

            <option selected>Guidance Duration</option>
            <option value="1">1 Day</option>
            <option value="2">10 Hours</option>
            <option value="3">6 Hours</option>
            <option value="3">2 Days</option>


          </select>

        </div>
        <div className='price'>
          <span>Lowest Price</span>
        </div>

      </div>
      <div className='filtered-hotels'>
        {
          filteredTouristGuideData.map((filteredTouristGuideData) => {
            return (<FilteredTouristGuide key={filteredTouristGuideData.id} filteredTouristGuideData={filteredTouristGuideData} />)
          })
        }

      </div>
      <Footer />
    </>


  )
}
