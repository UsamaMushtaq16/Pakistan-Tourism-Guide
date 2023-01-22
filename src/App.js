import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import SignUp from './Pages/Signup/SignUp'
import HotelPage from "./Pages/HotelPage/HotelPage";
import HotelDetail from "./Pages/HotelDetail/HotelDetail";
import HotelBooking from "./Pages/HotelBooking/HotelBooking";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";
import RestaurantDetail from "./Pages/RestaurantDetail/RestaurantDetail";
import RestaurantBooking from "./Pages/RestaurantBooking/RestaurantBooking";
import TourPage from "./Pages/TourPlanPage/TourPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/hotel" element={<HotelPage/>} />
            <Route path="/hoteldetail" element={<HotelDetail/>} />
            <Route path="/hotelbooking" element={<HotelBooking/>} />
            <Route path="/restaurant" element={<RestaurantPage/>} />
            <Route path="/restaurantdetail" element={<RestaurantDetail/>} />
            <Route path="/restaurantbooking" element={<RestaurantBooking/>} />
            <Route path="/tour" element={<TourPage/>} />



          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
