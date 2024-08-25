import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Course from './components/Course';
import TestandQuizzes from './components/TestandQuizzes';
import Test from './components/Test';
import Quiz from './components/Quiz';
import Favourites from './components/Favourites'; // Import the new component
import Subscribed from './components/Subscribed'; // Import the new component
import Library from './components/Library'; // Import the new component
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Box from '@mui/material/Box';
 import { ThemeProvider } from './pages/Theme/ThemeContext' // Ensure this path is correct
 import Login from './components/Login';

const drawerWidth = 240; // Set your sidebar width here
const headerHeight = 64; // Adjust this value to match the height of your fixed header

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider> {/* Wrap your application with ThemeProvider */}
      <BrowserRouter>
        <Header 
          open={sidebarOpen} 
          handleDrawerToggle={handleDrawerToggle} 
          isLoggedIn={isLoggedIn} 
          onLogout={handleLogout} 
        />
        <Box sx={{ display: 'flex' }}>
          <Sidebar open={sidebarOpen} handleDrawerToggle={handleDrawerToggle} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              ml: `${drawerWidth}px`, // Sidebar width adjustment
              mt: `${headerHeight}px`, // Header height adjustment
              transition: 'margin-left 0.3s', // Smooth transition for sidebar toggle
              width: `calc(100% - ${drawerWidth}px)`, // Ensure the main content width is reduced by the sidebar width
              minHeight: `calc(100vh - ${headerHeight}px)`, // Ensure the main content fills the rest of the screen height
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/courses" />} />
              <Route path="/courses" element={<Course />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/test-and-quiz" element={<TestandQuizzes />} />
              <Route path="/test" element={<Test />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/favourites" element={<Favourites />} /> {/* New route */}
              <Route path="/subscribed" element={<Subscribed />} /> {/* New route */}
              <Route path="/library" element={<Library />} /> {/* New route */}
              <Route path="/login" element={<Login/>} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
