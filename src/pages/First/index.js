import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const First = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    return (
      <>
        <BrowserRouter>
          <Header open={sidebarOpen} handleDrawerToggle={handleDrawerToggle} />
          <div className='main d-flex'>
            <div className='sidebarWrapper'>
              <Sidebar open={sidebarOpen} handleDrawerToggle={handleDrawerToggle} />
            </div>
  
            <div className='content'>
              <Routes>
                <Route path="/" exact={true} element={<Dashboard />} />
                <Route path="/Dashboard" exact={true} element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </>
    );
  }
  

export default First;


