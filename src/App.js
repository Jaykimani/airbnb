import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Landing from './components/landing/landing';
import Booking from './pages/booking/booking';
import Guest from './pages/guest/guest';
import FoodInfo from './pages/food-info/foodInfo';

function App() {
  return (<>
     <Router>
    <Routes>
    <Route path='/'  element={<Landing />}/>
    <Route path='/booking'  element={<Booking />}/>
    <Route path='/guest' element={<Guest />} />
    <Route path='/food-info' element={<FoodInfo />} />
    </Routes>
    </Router>
  
  </>
    
  );
}

export default App;
