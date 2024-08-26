import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { RiMenuFoldLine } from "react-icons/ri";
import { CiLight } from "react-icons/ci";
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import Search from '../Search';
import logo from '../../assets/images/logo.jpg';
import { useTheme } from '../../pages/Theme/ThemeContext'; // Adjust the path if needed

const Header = ({ open, handleDrawerToggle, isLoggedIn, onLogout }) => {
  const { theme, toggleTheme } = useTheme(); // Use the theme context
  const [anchorEl, setAnchorEl] = useState(null);
  const openMyAcc = Boolean(anchorEl);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleLoginRedirect = () => {
    navigate('/login');
    handleCloseMyAccDrop();
  };

  return (
    <header className='w-100 py-2' style={{ backgroundColor: theme === 'light' ? '#fff' : '#333' }}>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          {/* Logo and Menu Toggle */}
          <div className='col-6 col-sm-2 d-flex align-items-center'>
            {/* Menu Toggle Button - Visible Only on Small Screens */}
            <Button
              className="d-block d-sm-none me-2"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{
                padding: 0,
                minWidth: 'auto',
              }}
            >
              <RiMenuFoldLine size={24} />
            </Button>
            {/* Logo */}
            <Link to="/" className="d-flex align-items-center text-decoration-none">
              <img src={logo} alt="EduSparks Logo" style={{ height: '40px' }} />
              <span className='ms-2 fw-bold text-dark'>EduSparks</span>
            </Link>
          </div>

          {/* Search Bar - Responsive Layout */}
          <div className='col-12 col-sm-6 col-md-6 col-lg-4 my-2 my-sm-0 d-flex align-items-center'>
            <Search />
          </div>

          {/* Icons and User Account */}
          <div className='col-6 col-sm-4 col-md-4 col-lg-6 d-flex align-items-center justify-content-end'>
            <div className='d-flex align-items-center'>
              {/* Theme Toggle Button */}
              <Button
                className="rounded-circle me-2 p-1"
                onClick={toggleTheme}
              >
                {theme === 'light' ? (
                  <CiLight size={20} />
                ) : (
                  <CiLight size={20} style={{ color: '#fff' }} />
                )}
              </Button>
              <Button className="rounded-circle me-2 p-1">
                <BsFillCartPlusFill size={20} />
              </Button>
              <Button className="rounded-circle me-2 p-1">
                <IoIosMail size={20} />
              </Button>
              {/* Account Button and Menu */}
              <div className='d-flex align-items-center'>
                {/* Account Button */}
                <Button
                  className="d-flex align-items-center"
                  onClick={handleOpenMyAccDrop}
                  sx={{ textTransform: 'none' }}
                >
                  <Avatar {...stringAvatar("Kent Dodds")} />
                  <div className='ms-2 d-none d-sm-block text-start'>
                    <h6 className='mb-0'>Kent Dodds</h6>
                    <small>@kent</small>
                  </div>
                </Button>
                {/* Account Menu */}
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAccDrop}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  sx={{ padding: 2 }}
                >
                  {isLoggedIn ? (
                    <>
                      <MenuItem onClick={handleCloseMyAccDrop} sx={{ padding: 1, fontSize: 12 }}>
                        <ListItemIcon sx={{ marginRight: 1 }}>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Profile
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={onLogout} sx={{ padding: 1, fontSize: 12 }}>
                        <ListItemIcon sx={{ marginRight: 1 }}>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </>
                  ) : (
                    <MenuItem onClick={handleLoginRedirect} sx={{ padding: 1, fontSize: 12 }}>
                      <ListItemIcon sx={{ marginRight: 1 }}>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Login
                    </MenuItem>
                  )}
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// Utility function to generate avatar initials and background color
const stringToColor = (string) => {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
};
