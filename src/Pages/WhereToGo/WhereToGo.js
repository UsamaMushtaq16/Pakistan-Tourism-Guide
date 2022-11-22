import "./WhereToGo.css";
import { useEffect, useState } from 'react'
import placeData from "./placeData";
import PlaceCard from "./PlaceCard";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const WhereToGo = () => {
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
    if(end===placeData.length)
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
    if(end < placeData.length)
    {
      setStart(start+1)
      setCurrent(end-1)
      setEnd(end + 1)
      setdisableLeft(false)
      setCurrent(1)
    }
  }

  
  return (
    <section className="where-to-go">
      <div className="content">
        <h1 className="places-heading">
          <span>Places To Go </span>
          <span>IN PAKISTAN</span>
        </h1>
        <p>Explore one of the famous and beautiful places of Pakistan</p>
      </div>
      <div className={ disableLeft ?  "disable-btn left-btn" : "action-btn left-btn" }  onClick={() => goToLeft() }>
        <AiOutlineLeft size={30}/>
      </div>
      <div className={ disableRight ? "disable-btn right-btn" : "action-btn right-btn" } onClick={() => goToRight()}>
        <AiOutlineRight size={30}/>
      </div>
      <div className="places-grid">
        {
          placeData.slice(start,end).map((data) => {
            return(<PlaceCard key={data.id} data={data}/>)
          })
        }
        
      </div>
      <div className="places-slider">
        {
          Array.from({ length: 3 }).map((data,index) =>{
            return(<div key={index} className={current===index ? 'places-slider-active-dot' : 'places-slider-dot'} ></div>)
          })
        }
      </div>
      <div className="place-view-btn">
        <button>View All</button>
      </div>
    </section>
  );
};

export default WhereToGo;
