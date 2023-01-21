import { MdLocationOn } from "react-icons/md";
import "./RestDetails.css";
import Stars from "../HotelPage/Stars";
import { Link } from "react-router-dom";




const RestDetails = ({ restDetailedData }) => {


    return (
        
            <div className="main-sec">

                <div className="top">

                    <h2>{restDetailedData.restaurantName}</h2>
                    <Link to='/hotelbooking'><button>Book Now</button></Link>

                </div>
                <p>
                    <span><MdLocationOn size={30} /></span>
                    <span>{restDetailedData.location}</span>
                </p>

                <div className="review">

                    <div className="rte">
                        <p>{restDetailedData.rating}</p>
                    </div>

                    <div className="review--right">
                        <Stars stars={restDetailedData.stars} />
                        <p > {restDetailedData.reviews} reviews</p>
                    </div>

                </div>



                <div className="desc">
                <div className="price">
                    <h3>Open : </h3>
                    <p>{restDetailedData.time} </p>

                </div>
                     
                    <p><span>Contact: &nbsp;</span><span>{restDetailedData.phone}</span></p>        

                </div>

                </div>
            
        
    );
};

export default RestDetails;
