import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import SignUp from './Pages/Signup/SignUp'
import HotelPage from "./Pages/HotelPage/HotelPage";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
