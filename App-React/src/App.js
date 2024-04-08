import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import NotFound from './components/NotFound';
import HomePageNavbar from './components/HomePage/HomePageNavbar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/createaccount' element={<CreateAccount />} />
        <Route exact path='/' element={<HomePageNavbar/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
