import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from './components/auth/Login';
import CreateAccount from './components/CreateAccount';
import NotFound from './components/NotFound';
import Homepage from './components/Homepage/Homepage';
import Sidebar from './components/Dashboard/Main/Sidebar';
import TableComponentProducts from './components/Dashboard/DataTables/ProductsDataTable';
import TableComponentUsers from './components/Dashboard/DataTables/UserDataTable/TableComponentUser';
import UsersDashboard from './components/UsersDashboard';
import SettingsUser from './components/Dashboard/Main/ModalUser/SettingsUser';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/createaccount' element={<CreateAccount />} />
        <Route exact path='/admindashboard' element={<Sidebar/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/tableproductsdashboard" element={<TableComponentProducts />} />
        <Route path="/tableusersdashboard" element={<TableComponentUsers />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/usersdashboard" element={<UsersDashboard />} />
        <Route path="/settingsuser" element={<SettingsUser />} />
      </Routes>
    </Router>
  );
}
