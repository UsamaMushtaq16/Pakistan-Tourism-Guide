import React from "react";
import Header from "../Header/Header";
import WhereToGo from "../WhereToGo/WhereToGo";
import Footer from "../Footer/Footer";
import "./Home.css";
import Tour from "../Tour/Tour";
import Reviews from "../Reviews/Reviews";
import ContactUs from "../ContactUs/ContactUs";
import Location from "../Location/Location";
import Food from "../Food/Food";
import Notification from "../NotificationBar/Notification";
import Hotels from "../Hotels/Hotels";

const Home = () => {
  return (
    <div className="Container">
      <Notification/>
      <Header/>
      <WhereToGo/>
      <Hotels/>
      <Tour/>
      <Food/>
      <Reviews/>
      <ContactUs/>
      <Location/>
      <Footer />
    </div>
  );
};

export default Home;
