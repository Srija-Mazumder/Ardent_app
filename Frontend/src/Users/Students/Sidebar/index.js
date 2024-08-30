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
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { FaPlay } from 'react-icons/fa';

const drawerWidth = 180; // Adjusted width to match your layout

const icons = [
  <FaPlay />,
  <DescriptionIcon />,
  <ContentPasteIcon />,
  <CurrencyRupeeIcon />,
  <LocalLibraryIcon />,
  <BookmarkIcon />,
];

const Sidebar = ({ window, open, handleDrawerToggle }) => {
  const container = window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Courses', path: 'courses' },
    { text: 'Dashboard', path: 'dashboard' },
    { text: 'Test & Quiz', path: 'test-and-quiz' },
    { text: 'Subscribed', path: 'subscribed' },
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
