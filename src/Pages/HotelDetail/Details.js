import { MdLocationOn } from "react-icons/md";
import "./Details.css";
import Stars from "../HotelPage/Stars";
import { Link } from "react-router-dom";




const Details = ({ hotelDetailedData }) => {


    return (
        
            <div className="main-sec">

                <div className="top">

                    <h2>{hotelDetailedData.hotelName}</h2>
                    <Link to='/hotelbooking'><button>Book Now</button></Link>

                </div>
                <p>
                    <span><MdLocationOn size={30} /></span>
                    <span>{hotelDetailedData.location}</span>
                </p>

                <div className="review">

                    <div className="rte">
                        <p>{hotelDetailedData.rating}</p>
                    </div>

                    <div className="review--right">
                        <Stars stars={hotelDetailedData.stars} />
                        <p > {hotelDetailedData.reviews} reviews</p>
                    </div>

                </div>



                <div className="price">
                    <h3>{hotelDetailedData.price} </h3>
                    <p> per night</p>
                </div>
                <div className="desc">
                    <p>All taxes & fees included</p>
                    <p><span>Contact: </span><span>{hotelDetailedData.phone}</span></p>        

                </div>

                </div>
            
        
    );
};

export default Details;
