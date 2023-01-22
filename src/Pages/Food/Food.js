import React from 'react'
import './Food.css'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import foodsData from './foodData'
import FoodCard from './FoodCard'
import { Link } from 'react-router-dom'


const Food = () => {
    const [start, setStart] = useState(0);
    const [current, setCurrent] = useState(0);
    const [end, setEnd] = useState(3)
    const [disableLeft, setdisableLeft] = useState(true)
    const [disableRight, setdisableRight] = useState(false)
  
    useEffect(() => {
      if(start===0)
      {
        setdisableLeft(true)
        setdisableRight(false)
        setCurrent(0)
      }
      if(end===foodsData.length)
      {
        setdisableRight(true)
        setdisableLeft(false)
        setCurrent(2)
      }
    },[setCurrent, setdisableLeft, setdisableRight, end, start]);
  
    const goToLeft = () => {
      if(start>0)
      {
        setCurrent(start)
        setStart(start-1)
        setEnd(end-1)
        setdisableRight(false)
        setCurrent(1)
      }
    }
  
    const goToRight = () => {
      if(end < foodsData.length)
      {
        setStart(start+1)
        setCurrent(end-1)
        setEnd(end + 1)
        setdisableLeft(false)
        setCurrent(1)
      }
    }
  
    
    return (
      <section className="food-div">
        <div className="food-content">
            <h1 className="food-div-heading">
                <span>Plan Your </span>
                <span>Cuisine</span>
            </h1>
            <div className="food-action-div">
                <div className="food-sorting-div">
                    <select name="food" id="">
                        <option value="free">Select your City</option>
                        <option value="starter">Hunza</option>
                        <option value="professional">Mazafrabad</option>
                        <option value="corporate">Islamabad</option>
                    </select>
                </div>
                <div className="food-action-button-div">
                    <p>View more Foods</p>
                    <div className={ disableLeft ?  "food-disable-btn food-left-btn" : "food-action-btn food-left-btn" }  onClick={() => goToLeft() }>
                        <AiOutlineLeft size={15}/>
                    </div>
                    <div className={ disableRight ? "food-disable-btn food-right-btn" : "food-action-btn food-right-btn" } onClick={() => goToRight()}>
                        <AiOutlineRight size={15}/>
                    </div>
                </div>
            </div>
        
            <div className="food-grid">
            {
                foodsData.slice(start,end).map((data) => {
                return(<FoodCard key={data.id} data={data}/>)
                })
            }
            </div>
            <div className="food-slider">
            {
                Array.from({ length: 3 }).map((data,index) =>{
                return(<div key={index} className={current===index ? 'food-slider-active-dot' : 'food-slider-dot'} ></div>)
                })
            }
            </div>
            <div className="food-view-btn">
              <Link to='/restaurant'><button>View All</button></Link>
            </div>
        </div>
      </section>
  );
}

export default Food