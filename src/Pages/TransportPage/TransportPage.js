import React from 'react'
import Notification from '../NotificationBar/Notification'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./TransportPage.css";
import FilteredTransport from "./FilteredTransport";
import filterTransportData from "./FilteredTransportData";


export default function TransportPage() {
  return (
    <>
      <Notification />
      <Navbar />
      <div className='Container-transport'>
        <div className='tour-Container2'>

          <div className='trans-form-sec'>
            <h1>Find the Transport</h1>
            <form class="row gx-3 gy-2 align-items-center">
              <div class="col">
                <label class="visual" for="specificSizeInputName">Where do you want to go?</label>
                <select class="form-select" id="specificSizeSelect">
                  <option selected>Choose...</option>
                  <option value="1">From Swat to Islamabad</option>
                  <option value="2">From Lahore to Hunza</option>
                  <option value="3">From Lahore to Muree</option>
                  <option value="4">From Lahore to Islamabad</option>
                </select>

              </div>
              <div class="col">
                <label class="visual" for="specificSizeSelect">Convence Type</label>
                <select class="form-select" id="specificSizeSelect">
                  <option selected>Choose...</option>
                  <option value="1">Car</option>
                  <option value="2">AC Car</option>
                  <option value="3">Daewoo</option>
                  <option value="3">Coach</option>
                </select>

              </div>




              <div class="buton">
                <button type="submit" class="btn btn-outline-light">Search Transport</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='transport'>
        <span>Book Your&nbsp;</span>
        <span>Transport</span>
        <br /><br />

      </div>

      <div className='tour-filter'>
        <div className='city'>
          <select>
            <option selected>Select Destination City</option>
            <option value="1">From Swat to Islamabad</option>
            <option value="2">From Lahore to Hunza</option>
            <option value="3">From Lahore to Muree</option>
            <option value="4">From Lahore to Islamabad</option>
          </select>
        </div>
        <div className='reviews'>
          <span>Top Reviews</span>
        </div>

        <div className='hotel-type'>
          <select>
            <option selected>Convence Type</option>
            <option value="1">Car</option>
            <option value="2">AC Car</option>
            <option value="3">Daewoo</option>
            <option value="3">Coach</option>


          </select>

        </div>
        <div className='price'>
          <span>Lowest Price</span>
        </div>

      </div>
      <div className='filtered-hotels'>
        {
          filterTransportData.map((filterTransportData) => {
            return (<FilteredTransport key={filterTransportData.id} filterTransportData={filterTransportData} />)
          })
        }

      </div>
      <Footer />
    </>


  )
}
