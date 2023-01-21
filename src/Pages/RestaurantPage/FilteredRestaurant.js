import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import "./FilteredRestaurant.css";
import Stars from "./Stars";

const FilteredRestaurant = ({ restaurantData }) => {

    const boxStyle = {
        backgroundImage: `url(${restaurantData.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: ".1s",
        height: "300px",
    };


    return (
        <div className="hotel-card">
            <div className="left-div" style={boxStyle}>
                {restaurantData.featured ? <p className="feature-tag">Featured</p> : <p className="disable-feature-tag"></p>}
            </div>
            <div className="right-div">
                <h2>{restaurantData.restaurantName}</h2>
                <p>
                    <span><MdLocationOn size={25} /></span>
                    <span>{restaurantData.location}</span>
                </p>
                <div className="reviews-div">

                    <div className="rate">
                        <p>{restaurantData.rating}</p>
                    </div>

                    <div className="review-right">
                        <Stars stars={restaurantData.stars} />
                        <p className="reviews-p"> {restaurantData.reviews} reviews</p>
                    </div>

                </div>
                <div className="services">
                    <p>Free cancellation</p>
                    <p>Separate hall for families</p>
                </div>

                <div className="rest-butn">
                    <div className="rest-time">

                        
                            <span><h3>Open :</h3></span>
                            <span className='rest-time-text'>{restaurantData.time}</span>
                        

                    </div>
                    <Link to="/restaurantdetail"><button>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FilteredRestaurant;
