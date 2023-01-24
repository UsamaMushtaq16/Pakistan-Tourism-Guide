import React from 'react'
import Notification from '../NotificationBar/Notification'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./TourDetail.css"
import bgtour from '../../assets/TourAssets/tour-bg.png'
import islamabad from '../../assets/TourAssets/Islamabad.jpg'
import Gilgit from '../../assets/TourAssets/GilgitPic.jpg'
import Swat from '../../assets/TourAssets/SwatPic.jpg'
import isb from '../../assets/Login Assets/login-image.png'
import InnerDetails from './InnerDetails'
import tourDetailedData from './TourDetailedData'
import recommendTours from './RecommendedTourData'
import RecommendedTour from './RecommendedTour'
import { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function TourDetail() {
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
        if (end === recommendTours.length) {
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
        if (end < recommendTours.length) {
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
            <div className='top-sec'>

                <div className='imgs-left'>
                    <img src={bgtour} alt="" />
                </div>

                <div className='imgs-right'>
                    <div className='img-top'>
                        <img src={islamabad} alt="" />
                        <img src={Gilgit} alt="" />
                    </div>

                    <div className='img-botm'>
                        <img src={Swat} alt="" />
                        <img src={isb} alt="" />

                    </div>
                </div>

            </div>


            <div>
                {
                    tourDetailedData.map((tourDetailedData) => {
                        return (<InnerDetails key={tourDetailedData.id} tourDetailedData={tourDetailedData} />)
                    })
                }


            </div>
            <div>
                <div className="properties">
                    <div className="properties-left">
                        <h2>
                            <span>Includes </span>
                            

                        </h2>
                        <div className="services-main">
                            <div className="service">
                                <ul>
                                    <li>3 Breakfasts</li>
                                    <li>2 Dinners</li>
                                    <li>Luxury Transportation</li>
                                    <li>Fuel, all road tolls & parking expenses</li>
                                </ul>
                            </div>

                            <div className="service">
                                <ul>
                                    <li>Bonfire</li>
                                    <li>BBQ</li>
                                    <li>2-Night Hotel Accommodation</li>

                                </ul>
                            </div>

                        </div>

                        <h2>
                            <span>Excludes </span>
 
                        </h2>
                        <div className="services-main">
                            <div className="service">
                                <ul>
                                    <li>Anything not mentioned inclusive</li>
                                    <li>Any types of entry tickets or passes</li>
                                    <li>Lunch, Dinner or Snacks</li>
                                   
                                </ul>
                            </div>

                            <div className="service">
                                <ul>
                                    <li>Boating or Rafting Tickets</li>
                                    <li>Any type of Hot & Cold Drink</li>
                                    <li>Personal nature expenses</li>

                                </ul>
                            </div>
                        </div>
                         
                        
                    </div>
                    <div className="properties-right">
                        <p>
                            Experience ultimate convenience with all amenities you need to ensure a confortable and memorable tour with our tour agency.
                        </p>
                    </div>


                </div>
            </div>

 
            <div className='recommended-tour'>

                <section className="plans-div">
                    <div className="content">
                        <div className="action-div">
                            <div className="sorting-div">
                                <span>Recommended </span>
                                <span>Tour Plans</span>
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
                                recommendTours.slice(start, end).map((data) => {
                                    return (<RecommendedTour key={data.id} data={data} />)
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


                    </div>

                </section>
            </div>
            <Footer />
        </>
    )
}
