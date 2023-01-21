import React from 'react'
import Notification from '../NotificationBar/Notification'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./RestaurantDetail.css"
import FoodImage from '../../assets/HotelsAssets/RestaurantHeader.jpg'
import FoodImage1 from '../../assets/FoodAssets/restaurant2.png'
import FoodImage2 from '../../assets/FoodAssets/restaurant3.png'
import FoodImage3 from '../../assets/FoodAssets/restaurant1.png'
import Rakapshi from '../../assets/PlacesAssets/swat.png'
import RestDetails from './RestDetails'
import restDetailedData from './RestaurantDetailedData'
import recommendRestaurant from './RecommendedRestData'
import RecommendedRestaurant from './RecommendedRestaurant'
import { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
 
export default function RestaurantDetail() {
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
        if (end === recommendRestaurant.length) {
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
        if (end < recommendRestaurant.length) {
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
                    <img src={FoodImage} alt="" />
                </div>

                <div className='imgs-right'>
                    <div className='img-top'>
                        <img src={FoodImage1} alt="" />
                        <img src={FoodImage2} alt="" />
                    </div>

                    <div className='img-botm'>
                        <img src={Rakapshi} alt="" />
                        <img src={FoodImage3} alt="" />

                    </div>
                </div>

            </div>


            <div>
                {
                    restDetailedData.map((restDetailedData) => {
                        return (<RestDetails key={restDetailedData.id} restDetailedData={restDetailedData} />)
                    })
                }


            </div>
            <div>
                <div className="properties">
                    <div className="properties-left">
                        <h2>
                            <span>Properties </span>
                            <span>Amenities</span>

                        </h2>
                        <div className="services-main">
                            <div className="service">
                                <ul>
                                    <li>Free Cancellation</li>
                                    <li>Free WiFi</li>
                                </ul>
                            </div>

                            <div className="service">
                                <ul>
                                    <li>Seperate hall for families</li>
                                    <li>Air Conditioned hall</li>
                              </ul>
                            </div>

                        </div>

                        <h2>
                            <span>Food </span>
                            <span>Types</span>

                        </h2>
                        <div className="services-main">
                            <div className="service">
                                <ul>
                                    <li>BBQ</li>
                                    <li>Desi</li>
                                    <li>Rice</li>
                                </ul>
                            </div>

                            <div className="service">
                                <ul>
                                    <li>Fast Food</li>
                                    <li>Chinese Food</li>
                                    <li>Italian Food</li>

                                </ul>
                            </div>
                        </div>
                          
                       
                    </div>
                    <div className="r-properties-right">
                        <p>
                            Enjoy and experience good quality and hygienic food of different types at our top class restaurant.
                        </p>
                    </div>


                </div>
            </div>


            <div className="policy">
                <h2>Our Policies</h2>
                <div className="policy-main">

                    <div className="policy-left">
                        <h3>Booking</h3>
                        <p>Please, reserve your table 1 hour before of coming</p>
                        <h3>Cancellation</h3>
                        <p>Free cancellation available</p>                     

                        <h3>Payment Types</h3>
                        <ul>
                            <li>Cash Payment</li>
                            <li>Card Payment</li>
                        </ul>

                    </div>

                    <div className="policy-right">
                    <h3>Opening Hours</h3>
                        <span>11:00 AM - 12:00 AM</span>
                    </div>

                </div>
            </div>
            <div className='recommend'>

                <section className="plans-div">
                    <div className="content">
                        <div className="action-div">
                            <div className="sorting-div">
                                <span>Recommended </span>
                                <span>Hotels</span>
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
                                recommendRestaurant.slice(start, end).map((data) => {
                                    return (<RecommendedRestaurant key={data.id} data={data} />)
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
