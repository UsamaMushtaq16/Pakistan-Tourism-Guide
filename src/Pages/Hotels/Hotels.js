import React from "react";
import "./Hotels.css";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import plansData from "./plansData";
import PlanCard from "./HotelCard";
import { Link } from "react-router-dom";


const Hotels = () => {
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
      if(end===plansData.length)
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
      if(end < plansData.length)
      {
        setStart(start+1)
        setCurrent(end-1)
        setEnd(end + 1)
        setdisableLeft(false)
        setCurrent(1)
      }
    }
  
    
    return (
      <section className="plans-div">
        <div className="content">
            <h1 className="plan-div-heading">
                <span>Plan Your </span>
                <span>Next Staycation</span>
            </h1>
            <div className="action-div">
                <div className="sorting-div">
                    <select name="language" id="">
                        <option value="free">Select your City</option>
                        <option value="starter">Hunza</option>
                        <option value="professional">Mazafrabad</option>
                        <option value="corporate">Islamabad</option>
                    </select>
                </div>
                <div className="action-button-div">
                    <p>View more hotels</p>
                    <div className={ disableLeft ?  "disable-btn plan-left-btn" : "action-btn plan-left-btn" }  onClick={() => goToLeft() }>
                        <AiOutlineLeft size={15}/>
                    </div>
                    <div className={ disableRight ? "disable-btn plan-right-btn" : "action-btn plan-right-btn" } onClick={() => goToRight()}>
                        <AiOutlineRight size={15}/>
                    </div>
                </div>
            </div>
        
            <div className="plans-grid">
            {
                plansData.slice(start,end).map((data) => {
                return(<PlanCard key={data.id} data={data}/>)
                })
            }
            
            </div>
            <div className="plans-slider">
            {
                Array.from({ length: 3 }).map((data,index) =>{
                return(<div key={index} className={current===index ? 'plans-slider-active-dot' : 'plans-slider-dot'} ></div>)
                })
            }
            </div>
            <div className="place-view-btn">
            <Link to="/hotel"><button>View All</button></Link>
            </div>
        </div>
      </section>
  );
};

export default Hotels;
