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
import TourDetail from "./Pages/TourDetail/TourDetail";
import TourBooking from "./Pages/TourBooking/TourBooking";
import TransportPage from "./Pages/TransportPage/TransportPage";
import TransportBooking from "./Pages/TransportBooking/TransportBooking";
import Places from "./Pages/Places/Places";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminHotel from "./Pages/AdminDashboard/AdminHotel";
import AdminRestaurant from "./Pages/AdminDashboard/AdminRestaurant";
import AdminTourAgency from "./Pages/AdminDashboard/AdminTourAgency";
import AdminTransport from "./Pages/AdminDashboard/AdminTransport";
import AdminTouristGuide from "./Pages/AdminDashboard/AdminTouristGuide";
import AdminUser from "./Pages/AdminDashboard/AdminUser";
import TouristGuidePage from "./Pages/TouristGuidePage/TouristGuidePage";
import TouristGuideBooking from "./Pages/TouristGuideBooking/TouristGuideBooking";


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
            <Route path="/tourdetail" element={<TourDetail/>} />
            <Route path="/tourbooking" element={<TourBooking/>}/>
            <Route path="/transport" element={<TransportPage/>} />
            <Route path="/transportBooking" element={<TransportBooking/>}/>
            <Route path="/tourist-guide" element={<TouristGuidePage/>}/>
            <Route path="/tourist-guide-booking" element={<TouristGuideBooking/>}/>
            <Route path="/places" element={<Places/>}/>
            <Route path="/admin" element={<AdminDashboard/>}/>
            <Route path="/admin/hotels" element={<AdminHotel/>}/>
            <Route path="/admin/restaurants" element={<AdminRestaurant/>}/>
            <Route path="/admin/tour-agency" element={<AdminTourAgency/>}/>
            <Route path="/admin/transport" element={<AdminTransport/>}/>
            <Route path="/admin/tourist-guide" element={<AdminTouristGuide/>}/>
            <Route path="/admin/users" element={<AdminUser/>}/>


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
