import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from './components/auth/Login';
import CreateAccount from './components/CreateAccount';
import NotFound from './components/NotFound';
import Homepage from './components/Homepage/Homepage';
import SideNavbar from './components/Dashboard/SideNavbar';
import TableComponentProducts from './components/Dashboard/ProductsDataTable';
import TableComponentUsers from './components/Dashboard/UserDataTable';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/createaccount' element={<CreateAccount />} />
        <Route exact path='/dashboard' element={<SideNavbar/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/productsdashboard" element={<TableComponentProducts />} />
        <Route path="/usersdashboard" element={<TableComponentUsers />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}
