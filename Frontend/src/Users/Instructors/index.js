import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';
import Dashboard from './Dashboard';
import TeacherCourseList from './Course';
import First from './First';
import Library from './Library';
import Sidebar from './Sidebar';
import Upload from './Upload';
import Login from '../../Login';
import SignUp from '../../Users/Students/Signup';
import Footer from '../../Footer';
import Header from '../Students/Header';

const theme = createTheme();
const drawerWidth = 240;
const headerHeight = 64;

const Instructor = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleDrawerToggle = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <MUIThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        {isLoggedIn && (
          <Header
            open={sidebarOpen}
            handleMenuToggle={handleDrawerToggle}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            sx={{
              height: `${headerHeight}px`,
              width: '100%',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 1200,
            }}
          />
        )}
        <Box sx={{ display: 'flex', flex: 1, mt: `${headerHeight}px` }}>
          {isLoggedIn && (
            <Sidebar
              open={sidebarOpen}
              handleDrawerToggle={handleDrawerToggle}
              sx={{
                width: `${drawerWidth}px`,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: `${drawerWidth}px`,
                  boxSizing: 'border-box',
                },
                position: 'fixed',
                top: `${headerHeight}px`,
                left: 0,
                height: `calc(100vh - ${headerHeight}px)`,
                zIndex: 1100,
              }}
            />
          )}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              ml: { sm: sidebarOpen ? `${drawerWidth}px` : 0 },
              width: { sm: `calc(100% - ${sidebarOpen ? drawerWidth : 0}px)` },
              height: `calc(100vh - ${headerHeight}px)`,
              overflowY: 'auto',
              transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            }}
          >
            <Routes>
              <Route path="/" element={<First />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="course" element={<TeacherCourseList />} />
              <Route path="library" element={<Library />} />
              <Route path="upload" element={<Upload />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Routes>
          </Box>
        </Box>
        <Footer sx={{ mt: 'auto', width: '100%' }} />
      </Box>
    </MUIThemeProvider>
  );
};

export default Instructor;
