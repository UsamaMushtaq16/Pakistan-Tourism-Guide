import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import "./FilteredTouristGuide.css";
import Stars from "./Stars";

const FilteredTouristGuide = ({ filteredTouristGuideData }) => {

    const boxStyle = {
        backgroundImage: `url(${filteredTouristGuideData.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: ".1s",
        height: "300px",
    };


    return (
        <div className="hotel-card">
            <div className="left-div" style={boxStyle}>
                {filteredTouristGuideData.featured ? <p className="feature-tag">Featured</p> : <p className="disable-feature-tag"></p>}
            </div>
            <div className="right-div">
                <div className="trans-name">
                <h2>{filteredTouristGuideData.name}</h2>
                <p>{filteredTouristGuideData.phone}</p>

                </div>
                <p className="t-des">
                    <span><MdLocationOn size={25} /></span>
                    <span>{filteredTouristGuideData.location}</span>
                </p>
                <div className="reviews-div">

                    <div className="rate">
                        <p>{filteredTouristGuideData.rating}</p>
                    </div>

                    <div className="review-right">
                        <Stars stars={filteredTouristGuideData.stars} />
                        <p className="reviews-p"> {filteredTouristGuideData.reviews} reviews</p>
                    </div>

                </div>
                <div className="services">
                    <p className="duration"></p>
                    <p>{filteredTouristGuideData.time}</p>
                </div>

                <div className="rest-butn">
                    <div className="rest-time">

                        
                            <span><h3>{filteredTouristGuideData.price}</h3></span>
                            
                
                    </div>
                    <Link to="/tourist-guide-booking"><button>Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FilteredTouristGuide;
