import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from './components/auth/Login';
import CreateAccount from './components/CreateAccount';
import NotFound from './components/NotFound';
import DashboardNavbar from './components/Dashboard/DashboardNavbar';
import Homepage from './components/Homepage/Homepage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/createaccount' element={<CreateAccount />} />
        <Route exact path='/' element={<DashboardNavbar/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}
