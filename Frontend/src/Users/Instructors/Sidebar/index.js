import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import DescriptionIcon from '@mui/icons-material/Description';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachFileIcon from '@mui/icons-material/AttachFile'; // Clip icon for uploads
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { FaPlay } from 'react-icons/fa'; // Course icon

const drawerWidth = 180; // Adjusted width to match your layout

const icons = [
  <FaPlay />,          // Courses
  <DashboardIcon />,   // Dashboard
  <AttachFileIcon />,  // Uploads
  <BookmarkIcon />,    // First (assuming this is a bookmark feature)
  <LibraryBooksIcon /> // Library
];

const Sidebar = ({ window, open, handleDrawerToggle }) => {
  const container = window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Courses', path: 'course' },
    { text: 'Dashboard', path: 'dashboard' },
    { text: 'Upload', path: 'upload' },
    { text: 'Library', path: 'library' }
  ];

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  const drawerContent = (
    <div>
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.text} onClick={() => handleMenuItemClick(item.path)}>
            <ListItemIcon sx={{ minWidth: 35, marginRight: 2 }}>
              {icons[index]}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Mobile Drawer */}
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' }, // Show on extra small screens
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>
      {/* Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' }, // Hide on extra small screens
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  window: PropTypes.func,
  open: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default Sidebar;
