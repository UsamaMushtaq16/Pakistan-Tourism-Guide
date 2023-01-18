import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import "./FilteredHotels.css";
import Stars from "./Stars";

const FilteredHotels = ({ hotelData }) => {

    const boxStyle = {
        backgroundImage: `url(${hotelData.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: ".1s",
        height: "350px",
    };


    return (
        <div className="hotel-card">
            <div className="left-div" style={boxStyle}>
                {hotelData.featured ? <p className="feature-tag">Featured</p> : <p className="disable-feature-tag"></p>}
            </div>
            <div className="right-div">
                <h2>{hotelData.hotelName}</h2>
                <p>
                    <span><MdLocationOn size={25} /></span>
                    <span>{hotelData.location}</span>
                </p>
                <div className="reviews-div">

                    <div className="rate">
                    <p>{hotelData.rating}</p>
                    </div>
                    
                    <div className="review-right">
                        <Stars stars={hotelData.stars} />
                        <p className="reviews-p"> {hotelData.reviews} reviews</p>
                    </div>

                </div>
                <div className="services">
                    <p>Free cancellation</p>
                    <p>Breakfast included</p>
                </div>

                <div className="price-div">
                    <h3>{hotelData.price} </h3>
                    <p> per night</p>
                </div>
                <div className="butn">
                    <p>All taxes & fees included</p>
                    <Link to="/hoteldetail"><button>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FilteredHotels;
