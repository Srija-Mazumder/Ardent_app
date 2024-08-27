import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Course from './Course';
import TestandQuizzes from './TestandQuizzes';
import Test from './Test';
import Quiz from './Quiz';
import Subscribed from './Subscribed'; // Import the new component
import Library from './Library'; // Import the new component
import Header from './Header';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import { ThemeProvider } from '../../pages/Theme/ThemeContext'; // Ensure this path is correct
import Login from '../../Login';
import SignUp from './Signup'; // Import the SignUp component

const drawerWidth = 240; 
const headerHeight = 64; 

const Student = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume logged in for now

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Handle logout
  };

  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          {isLoggedIn && (
            <Header
              open={sidebarOpen}
              handleDrawerToggle={handleDrawerToggle}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
            />
          )}
          <Box sx={{ display: 'flex' }}>
            {isLoggedIn && (
              <Sidebar open={sidebarOpen} handleDrawerToggle={handleDrawerToggle} />
            )}
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                ml: isLoggedIn ? `${drawerWidth}px` : 0, // Sidebar width adjustment
                mt: isLoggedIn ? `${headerHeight}px` : 0, // Header height adjustment
                transition: 'margin-left 0.3s', // Smooth transition for sidebar toggle
                width: isLoggedIn ? `calc(100% - ${drawerWidth}px)` : '100%', // Ensure the main content width is reduced by the sidebar width
                minHeight: `calc(100vh - ${isLoggedIn ? headerHeight : 0}px)`, // Ensure the main content fills the rest of the screen height
              }}
            >
              <Routes>
                <Route path="/courses" element={<Course />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/test-and-quiz" element={<TestandQuizzes />} />
                <Route path="/test" element={<Test />} />
                <Route path="/quiz" element={<Quiz />} />
               
                <Route path="/subscribed" element={<Subscribed />} /> {/* New route */}
                <Route path="/library" element={<Library />} /> {/* New route */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </Box>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default Student;
