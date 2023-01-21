import React from 'react'
import Notification from '../NotificationBar/Notification'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./RestaurantPage.css";
import ViewedRestaurant from "./ViewedRestaurant";
import plansData from "./ViewedRestaurantData";
import { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import FilteredRestaurant from "./FilteredRestaurant";
import restaurantData from "./FilteredRestaurantData";


export default function RestaurantPage() {
  const [start, setStart] = useState(0);
  const [current, setCurrent] = useState(0);
  const [end, setEnd] = useState(3)
  const [disableLeft, setdisableLeft] = useState(true)
  const [disableRight, setdisableRight] = useState(false)

  useEffect(() => {
    if (start === 0) {
      setdisableLeft(true)
      setdisableRight(false)
      setCurrent(0)
    }
    if (end === plansData.length) {
      setdisableRight(true)
      setdisableLeft(false)
      setCurrent(2)
    }
  }, [setCurrent, setdisableLeft, setdisableRight, end, start]);

  const goToLeft = () => {
    if (start > 0) {
      setCurrent(start)
      setStart(start - 1)
      setEnd(end - 1)
      setdisableRight(false)
      setCurrent(1)
    }
  }

  const goToRight = () => {
    if (end < plansData.length) {
      setStart(start + 1)
      setCurrent(end - 1)
      setEnd(end + 1)
      setdisableLeft(false)
      setCurrent(1)
    }
  }

  return (
    <>
      <Notification/>
      <Navbar />
      <div className='Container-restaurant'>
        <div className='Container2'>

          <div className='rest-form-sec'>
            <h1>Find the Best Restaurant</h1>
            <form class="row gx-3 gy-2 align-items-center">
              <div class="col-sm-4">
                <label class="visual" for="specificSizeInputName">City/Restaurant</label>
                <input type="text" class="form-control" id="specificSizeInputName" placeholder="Enter destination or hotel name" />
              </div>
              <div class="col-sm-4">
              <label class="visual" for="specificSizeSelect">Restaurant Type</label>
                <select class="form-select" id="specificSizeSelect">
                  <option selected>Choose...</option>
                  <option value="1">3 star</option>
                  <option value="2">4 star</option>
                  <option value="3">5 star</option>
                </select>
                         
               </div>
               
              <div class="col-sm-4">
                <label class="visual" for="specificSizeSelect">Food</label>
                <select class="form-select" id="specificSizeSelect">
                  <option selected>Choose...</option>
                  <option value="1">Desi</option>
                  <option value="2">Fast Food</option>
                  <option value="3">Chinese</option>
                  <option value="3">Italian</option>
                </select>
              </div>


              <div class="buton">
                <button type="submit" class="btn btn-outline-light">Search Restaurant</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="plans-div">
        <div className="content">
          <div className="action-div">
            <div className="sorting-div">
              <span>Restaurant You've </span>
              <span>Viewed</span>
            </div>

            <div className="action-button-div">

              <div className={disableLeft ? "disable-btn plan-left-btn" : "action-btn plan-left-btn"} onClick={() => goToLeft()}>
                <AiOutlineLeft size={15} />
              </div>
              <div className={disableRight ? "disable-btn plan-right-btn" : "action-btn plan-right-btn"} onClick={() => goToRight()}>
                <AiOutlineRight size={15} />
              </div>
            </div>
          </div>

          <div className="plans-grid">
            {
              plansData.slice(start, end).map((data) => {
                return (<ViewedRestaurant key={data.id} data={data} />)
              })
            }

          </div>
          <div className="plans-slider">
            {
              Array.from({ length: 3 }).map((data, index) => {
                return (<div key={index} className={current === index ? 'plans-slider-active-dot' : 'plans-slider-dot'} ></div>)
              })
            }
          </div>
          <div className='hotels'>
            <span>Plan Your&nbsp;</span>
            <span>Cuisine &nbsp;&nbsp;&nbsp;&nbsp;</span>

          </div>

        </div>

      </section>

      <div className='hotel-filter'>
        <div className='city'>
          <select>
            <option selected>Select your City</option>
            <option value="1">Swat</option>
            <option value="2">Hunza</option>
            <option value="3">Muree</option>
            <option value="4">Islamabad</option>
          </select>
        </div>
        <div className='reviews'>
          <span>Top Reviews</span>
        </div>
        
        <div className='hotel-type'>
          <select>
            <option selected>Restaurant Type</option>
            <option value="1">3 Stars</option>
            <option value="2">4 Stars</option>
            <option value="3">5 Stars</option>

          </select>

        </div>
        <div className='price'>
          <span>Nearest First</span>
        </div>

      </div>
      <div className='filtered-hotels'>
            {
              restaurantData.map((restaurantData) => {
                return (<FilteredRestaurant key={restaurantData.id} restaurantData={restaurantData} />)
              })
}

          </div>
      <Footer />
    </>


  )
}
