import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from './components/auth/Login';
import CreateAccount from './components/CreateAccount';
import NotFound from './components/NotFound';
import Homepage from './components/Homepage/Homepage';
import SideNavbar from './components/Dashboard/SideNavbar';
import ProductsDashboard from './components/Dashboard/Products';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/createaccount' element={<CreateAccount />} />
        <Route exact path='/' element={<SideNavbar/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/productsdashboard" element={<ProductsDashboard />} />
        <Route path="/homepage" element={<Homepage />} />
        

      </Routes>
    </Router>
  );
}
