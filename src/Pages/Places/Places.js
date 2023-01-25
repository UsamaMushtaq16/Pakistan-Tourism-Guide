import "./Places.css";
import Notification from '../NotificationBar/Notification'
import Navbar from '../Header/Navbar/Navbar'
import Footer from '../Footer/Footer'
import placesData from "./PlacesData.js";
import PlacesCard from "./PlacesCard.js";
 
const Places = () => {
  return (
    <>
    <Notification/>
    <Navbar/>
    <section className="where-to-go">
      <div className="content">
        <h1 className="p-places-heading">
          <span>Places To Go </span>
          <span>IN PAKISTAN</span>
        </h1>
        <p>Explore one of the famous and beautiful places of Pakistan</p>
      </div>
      
      <div className="p-places-grid row">
        {
          placesData.map((data) => {
            return <div className="col md-3 my-3">
            <PlacesCard key={data.id} data={data}/>
            </div>
          })
        }
        
      </div>
       
    </section>
    <Footer/>
    </>
  );
};

export default Places;
