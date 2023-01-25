import React, { useState } from "react"
import './PlacesCard.css'
import { FiHeart } from 'react-icons/fi'

const PlacesCard = ({data}) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const activeCardStyle = {
        backgroundImage: `linear-gradient(
            rgba(4, 115, 106, 0.75),
            rgba(4, 115, 106, 0.75)
          ),url(${data.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: '.1s',
        
         
    }

    const cardStyle = {
        backgroundImage: `url(${data.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: '.1s',
        
    }


  return (
    

        <div className={isHovering ? 'p-active-card' : 'p-card'} style={isHovering ? activeCardStyle : cardStyle} 
            onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            { data.favourite ? <FiHeart size={30} stroke={'red'} fill={'red'}/> : <FiHeart size={30}/>}
            <h2>{data.placeName}</h2>
            <p>{data.description}</p>
            <p><span>{data.placeName},</span><span>{data.location}</span></p>
            <div className="place-bt">

            <button>Learn More</button>
            </div>
        </div> 
  )
}

export default PlacesCard;