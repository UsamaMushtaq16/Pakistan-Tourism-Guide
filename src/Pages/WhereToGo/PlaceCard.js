import React, { useState } from "react"
import './PlaceCard.css'
import { FiHeart } from 'react-icons/fi'

const PlaceCard = ({data}) => {

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
        transitionDelay: '.1s'
    }

    const cardStyle = {
        backgroundImage: `url(${data.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: '.1s'
    }


  return (
        <div className={isHovering ? 'active-card' : 'card'} style={isHovering ? activeCardStyle : cardStyle} 
            onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            { data.favourite ? <FiHeart size={30} stroke={'red'} fill={'red'}/> : <FiHeart size={30}/>}
            <h2>{data.placeName}</h2>
            <p>{data.description}</p>
            <hr/>
            <p><span>{data.placeName},</span><span>{data.location}</span></p>
        </div>
  )
}

export default PlaceCard