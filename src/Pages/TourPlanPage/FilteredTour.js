import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import "./FilteredTour.css";
import Stars from "./Stars";

const FilteredTour = ({ filterTourData }) => {

    const boxStyle = {
        backgroundImage: `url(${filterTourData.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: ".1s",
        height: "300px",
    };


    return (
        <div className="hotel-card">
            <div className="left-div" style={boxStyle}>
                {filterTourData.featured ? <p className="feature-tag">Featured</p> : <p className="disable-feature-tag"></p>}
            </div>
            <div className="right-div">
                <h2>{filterTourData.agencyName}</h2>
                <p className="t-des">
                    <span><MdLocationOn size={25} /></span>
                    <span>{filterTourData.description}</span>
                </p>
                <div className="reviews-div">

                    <div className="rate">
                        <p>{filterTourData.rating}</p>
                    </div>

                    <div className="review-right">
                        <Stars stars={filterTourData.stars} />
                        <p className="reviews-p"> {filterTourData.reviews} reviews</p>
                    </div>

                </div>
                <div className="services">
                    <p className="duration">{filterTourData.duration}</p>
                    <p>Departure at 8:00 PM every Tuesday & Friday</p>
                </div>

                <div className="rest-butn">
                    <div className="rest-time">

                        
                            <span><h3>{filterTourData.price}</h3></span>
                            <span className='rest-time-text'>per person</span>
                
                    </div>
                    <Link to="/restaurantdetail"><button>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FilteredTour;
