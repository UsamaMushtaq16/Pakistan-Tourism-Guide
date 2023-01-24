import { MdLocationOn } from "react-icons/md";
import "./InnerDetails.css";
import Stars from "../HotelPage/Stars";
import { Link } from "react-router-dom";




const InnerDetails = ({ tourDetailedData }) => {


    return (

        <div className="main-sec">

            <div className="top">

                <h2>{tourDetailedData.agencyName}</h2>
                <Link to='/tourbooking'><button>Book Now</button></Link>

            </div>
            <p className="td-description">
                <span><MdLocationOn size={30} /></span>
                <span>{tourDetailedData.description}</span>
            </p>

            <div className="review">

                <div className="rte">
                    <p>{tourDetailedData.rating}</p>
                </div>

                <div className="review--right">
                    <Stars stars={tourDetailedData.stars} />
                    <p > {tourDetailedData.reviews} reviews</p>
                </div>

            </div>
            <div className="td-duration">

                <h4>{tourDetailedData.duration}</h4>
                <p>Departure at 8:00 PM every Tuesday & Friday</p>
            </div>


            <div className="price">
                <h3>{tourDetailedData.price} </h3>
                <p> per head</p>
            </div>
            <div className="desc">
                <p>All taxes & fees included</p>
                <p><span>Contact: </span><span>{tourDetailedData.phone}</span></p>

            </div>

        </div>


    );
};

export default InnerDetails;
