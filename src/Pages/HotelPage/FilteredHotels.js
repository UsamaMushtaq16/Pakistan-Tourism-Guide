import { MdLocationOn } from "react-icons/md";
import "./FilteredHotels.css";
import Stars from "./Stars";

const FilteredHotels = ({ data }) => {

    const boxStyle = {
        backgroundImage: `url(${data.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: ".1s",
        height: "350px",
    };


    return (
        <div className="hotel-card">
            <div className="left-div" style={boxStyle}>
                {data.featured ? <p className="feature-tag">Featured</p> : <p className="disable-feature-tag"></p>}
            </div>
            <div className="right-div">
                <h2>{data.hotelName}</h2>
                <p>
                    <span><MdLocationOn size={25} /></span>
                    <span>{data.location}</span>
                </p>
                <div className="reviews-div">

                    <div className="rate">
                    <p>{data.rating}</p>
                    </div>
                    
                    <div className="review-right">
                        <Stars stars={data.stars} />
                        <p className="reviews-p"> {data.reviews} reviews</p>
                    </div>

                </div>
                <div className="services">
                    <p>Free cancellation</p>
                    <p>Breakfast included</p>
                </div>

                <div className="price-div">
                    <h3>{data.price} </h3>
                    <p> per night</p>
                </div>
                <div className="butn">
                    <p>All taxes & fees included</p>
                    <button>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FilteredHotels;
