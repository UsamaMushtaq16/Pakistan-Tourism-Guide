import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import "./FilteredTransport.css";
import Stars from "./Stars";

const FilteredTransport = ({ filterTransportData }) => {

    const boxStyle = {
        backgroundImage: `url(${filterTransportData.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: ".1s",
        height: "300px",
    };


    return (
        <div className="hotel-card">
            <div className="left-div" style={boxStyle}>
                {filterTransportData.featured ? <p className="feature-tag">Featured</p> : <p className="disable-feature-tag"></p>}
            </div>
            <div className="right-div">
                <div className="trans-name">
                <h2>{filterTransportData.name}</h2>
                <p>{filterTransportData.phone}</p>

                </div>
                <p className="t-des">
                    <span><MdLocationOn size={25} /></span>
                    <span>{filterTransportData.description}</span>
                </p>
                <div className="reviews-div">

                    <div className="rate">
                        <p>{filterTransportData.rating}</p>
                    </div>

                    <div className="review-right">
                        <Stars stars={filterTransportData.stars} />
                        <p className="reviews-p"> {filterTransportData.reviews} reviews</p>
                    </div>

                </div>
                <div className="services">
                    <p className="duration">{filterTransportData.convence}</p>
                    <p>{filterTransportData.time}</p>
                </div>

                <div className="rest-butn">
                    <div className="rest-time">

                        
                            <span><h3>{filterTransportData.price}</h3></span>
                            <span className='rest-time-text'>per head</span>
                
                    </div>
                    <Link to="/transportBooking"><button>Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FilteredTransport;
