import React, {useEffect, useState} from 'react'
import './TourCard.css'
import {MdAccountCircle} from 'react-icons/md'
import TourStars from './TourStars'

const TourCard = ({data}) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };

    useEffect(() => {
      },[isHovering]);
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const upperStyle = {
        backgroundImage: `url(${data.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: ".1s",
        height: "230px"
    }

    const activeUpperStyle = {
        backgroundImage: `linear-gradient(
            rgba(4, 115, 106, 0.75),
            rgba(4, 115, 106, 0.75)
          ),url(${data.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transitionDelay: ".1s",
        height: "230px",
        width: ''
    }

  return (
    <div className={isHovering ? "active-tour" : "tour-card" } onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {
            isHovering 
            ? 
            <>
                <div className='tour-card-upper' style={activeUpperStyle}>
                    {
                        data.featured ?  <p className='featured-tour'>Feature</p> : <p className='disable-featured-tour'></p>
                    }
                    <div className='active-content'>
                        <h4>{data.destination}</h4>
                        <h3>{data.duration}</h3>
                        <TourStars stars={data.stars}/>
                    </div>
                </div>
            </> 
            
            : 
            <>
                <div className='tour-card-upper' style={upperStyle}>
                    {
                        data.featured ?  <p className='featured-tour'>Feature</p> : <p className='disable-featured-tour'></p>
                    }
                    <h3 className='featured-tour-name'>{data.destination}</h3>
                    <p className='featured-tour-price'><span>{data.price}</span></p>
                </div>
                <div className='tour-card-lower'>
                    <div className='description' >
                        <span><MdAccountCircle size={30}/></span>
                        <span><p>{data.description}</p></span>
                    </div>
                    <p className='tour-duration'>{data.duration}</p>
                    <TourStars stars={data.stars}/>
                </div>
            </>
        }
        
    </div>
  )
}

export default TourCard