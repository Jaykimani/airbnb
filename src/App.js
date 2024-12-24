import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Landing from './components/landing/landing';
import Booking from './pages/booking/booking';

function App() {
  return (<>
     <Router>
    <Routes>
    <Route path='/'  element={<Landing />}/>
    <Route path='/booking'  element={<Booking />}/>
  
    </Routes>
    </Router>
  
  </>
    
  );
}

export default App;
