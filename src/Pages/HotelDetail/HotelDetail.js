import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./HotelDetail.css"
import Hotel1 from '../../assets/HotelsAssets/hotel-room1.png'
import Hotel2 from '../../assets/HotelsAssets/hotel-room2.png'
import Hotel3 from '../../assets/HotelsAssets/hotel-room3.png'
import Hotel4 from '../../assets/HotelsAssets/hotel-room4.png'
import Details from './Details'
import hotelDetailedData from './HotelDetailedData'
import recommendHotels from './RecommendedHotelData'
import RecommendedHotel from './RecommendedHotel'
import { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function HotelDetail() {
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
        if (end === recommendHotels.length) {
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
        if (end < recommendHotels.length) {
            setStart(start + 1)
            setCurrent(end - 1)
            setEnd(end + 1)
            setdisableLeft(false)
            setCurrent(1)
        }
    }

    return (
        <>
            <Navbar />
            <div className='top-sec'>

                <div className='imgs-left'>
                    <img src={Hotel1} alt="" />
                </div>

                <div className='imgs-right'>
                    <div className='img-top'>
                        <img src={Hotel2} alt="" />
                        <img src={Hotel3} alt="" />
                    </div>

                    <div className='img-botm'>
                        <img src={Hotel4} alt="" />
                        <img src={Hotel2} alt="" />

                    </div>
                </div>

            </div>


            <div>
                {
                    hotelDetailedData.map((hotelDetailedData) => {
                        return (<Details key={hotelDetailedData.id} hotelDetailedData={hotelDetailedData} />)
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
                                    <li>Free Parking</li>
                                    <li>Pool</li>
                                    <li>Free WiFi</li>
                                </ul>
                            </div>

                            <div className="service">
                                <ul>
                                    <li>Free Breakfast</li>
                                    <li>Free Dinner</li>
                                    <li>Fitness Center</li>

                                </ul>
                            </div>

                        </div>

                        <h2>
                            <span>Room </span>
                            <span>Features</span>

                        </h2>
                        <div className="services-main">
                            <div className="service">
                                <ul>
                                    <li>Air Condition</li>
                                    <li>Room Service</li>
                                    <li>Flat Screen TV</li>
                                </ul>
                            </div>

                            <div className="service">
                                <ul>
                                    <li>Sofa</li>
                                    <li>Private Balcony</li>
                                    <li>Refrigerator</li>

                                </ul>
                            </div>
                        </div>
                        <h2>
                            <span>Room </span>
                            <span>Types</span>

                        </h2>
                        <div className="services-main">
                            <div className="service">
                                <ul>
                                    <li>Bridal Suite</li>
                                </ul>
                            </div>

                            <div className="service">
                                <ul>
                                    <li>Non-Smoking Rooms</li>


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="properties-right">
                        <p>
                            Experience ultimate convenience with all amenities you need to ensure a confortable and relaxing stay at our business hotel.
                        </p>
                    </div>


                </div>
            </div>


            <div className="policy">
                <h2>Our Policies</h2>
                <div className="policy-main">

                    <div className="policy-left">
                        <h3>Check-in</h3>
                        <span>Check-in time starts at 2:00 PM</span>
                        <p>Express check-in available</p>
                        <h3>Children & extra beds</h3>
                        <p>Children are allowed</p>

                        <h3>Payment Types</h3>
                        <ul>
                            <li>Cash Payment</li>
                            <li>Card Payment</li>
                        </ul>

                    </div>

                    <div className="policy-right">
                        <h3>Check-out</h3>
                        <span>Checck-out time starts at 2:00 PM</span>
                        <p>Express check-out available</p>
                        <h3>Pets</h3>
                        <p>Pets not alowed</p>
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
                                recommendHotels.slice(start, end).map((data) => {
                                    return (<RecommendedHotel key={data.id} data={data} />)
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
