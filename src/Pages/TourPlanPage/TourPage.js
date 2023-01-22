import React from 'react'
import Notification from '../NotificationBar/Notification'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./TourPage.css";
import ViewedTour from "./ViewedTour";
import tourData from "./ViewedTourData";
import { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import FilteredTour from "./FilteredTour";
import filterTourData from "./FilteredTourData";


export default function TourPage() {
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
    if (end === tourData.length) {
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
    if (end < tourData.length) {
      setStart(start + 1)
      setCurrent(end - 1)
      setEnd(end + 1)
      setdisableLeft(false)
      setCurrent(1)
    }
  }

  return (
    <>
      <Notification />
      <Navbar />
      <div className='Container-tour'>
        <div className='tour-Container2'>

          <div className='tour-form-sec'>
            <h1>Find the Tour Plans</h1>
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
                <label class="visual" for="specificSizeSelect">Days</label>
                <select class="form-select" id="specificSizeSelect">
                  <option selected>Choose...</option>
                  <option value="1">1</option>
                  <option value="2">3</option>
                  <option value="3">5</option>
                  <option value="3">7</option>
                </select>

              </div>




              <div class="buton">
                <button type="submit" class="btn btn-outline-light">Search Tour Plan</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="plans-div">
        <div className="content">
          <div className="action-div">
            <div className="sorting-div">
              <span>Tour Plans You've </span>
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
              tourData.slice(start, end).map((data) => {
                return (<ViewedTour key={data.id} data={data} />)
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
          <div className='tour'>
            <span>Book Your&nbsp;</span>
            <span>Tour</span>
            <br /><br />

          </div>

        </div>

      </section>

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
            <option selected>Tour Days</option>
            <option value="1">1 Day</option>
            <option value="2">3 Days</option>
            <option value="3">5 Days</option>
            <option value="3">7 Days</option>


          </select>

        </div>
        <div className='price'>
          <span>Lowest Price</span>
        </div>

      </div>
      <div className='filtered-hotels'>
        {
          filterTourData.map((filterTourData) => {
            return (<FilteredTour key={filterTourData.id} filterTourData={filterTourData} />)
          })
        }

      </div>
      <Footer />
    </>


  )
}
