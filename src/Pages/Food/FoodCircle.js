import React from 'react'
import {VscCircleLargeFilled, VscCircleLargeOutline} from 'react-icons/vsc'

const FoodCircle = ({rating}) => {
    console.log(rating)
    const ratingCircle = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
    
        return (
          <span key={index}>
            {rating >= index + 1 ? (
              <VscCircleLargeFilled className="icon" size={10}/>
            ) : rating >= number ? (
              <VscCircleLargeOutline className="icon" size={10}/>
            ) : (
              <VscCircleLargeOutline className="icon" size={10}/>
            )}
          </span>
        );
      });
    
      return <div className="circle-icons-div">{ratingCircle}</div>;
}

export default FoodCircle