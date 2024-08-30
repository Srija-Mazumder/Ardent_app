import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer style={{ padding: '6px 0' }}>
      <AppBar
        position="static"
        color="default"
        style={{
          borderTop: '1px solid lightgray',
          padding: '10px 0', // Reduced padding
          backgroundColor: '#f8f9fa', // Ensures footer background matches app's theme
          boxShadow: 'none',
          height: 'auto', // Ensures it doesn't fix the height and allows content to define it
        }}
      >
        <Container maxWidth="lg">
          <Toolbar style={{ padding: 0, minHeight: 'auto' }}>
            <Grid container spacing={2} alignItems="center">
              {/* Left Section: Logo and Title */}
              <Grid
                item
                xs={12}
                sm={3} // Reduced from 4 to 3 to give more space to the text
                className="d-flex align-items-center justify-content-center justify-content-sm-start"
              >
                <img
                  src={logo}
                  alt="EduSparks Logo"
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
                />
                <Typography variant="h6" color="primary" className="fw-bold">
                  EduSparks
                </Typography>
              </Grid>

              {/* Middle Section: Slogan and Description */}
              <Grid
                item
                xs={12}
                sm={6} // Increased from 4 to 6 to utilize more space for text
                className="d-flex justify-content-center"
                style={{ padding: '0 10px' }} // Reduced padding to give more space to the text
              >
                <div className="container pt-4 w-100">
                  <div className="row">
                    <Typography variant="body1" className="fw-bold text-center" gutterBottom>
                      "Unlock Knowledge. Unleash Potential. Empower Yourself."
                    </Typography>
                    <Typography variant="body2" className="text-center" color="textSecondary">
                      EduSparks is a dynamic learning platform where students and teachers connect,
                      share, and grow together. Explore a vast library of courses, quizzes, and
                      resources, and unlock a world of learning possibilities.
                    </Typography>
                  </div>
                </div>
              </Grid>

              {/* Right Section: Social Media Icons */}
              <Grid
                item
                xs={12}
                sm={3} // Reduced from 4 to 3 to balance space distribution
                className="d-flex justify-content-center justify-content-sm-end social-link"
              >
                <IconButton href="#" aria-label="Facebook">
                  <Facebook style={{ color: 'lightgray' }} />
                </IconButton>
                <IconButton href="#" aria-label="Twitter">
                  <Twitter style={{ color: 'lightgray' }} />
                </IconButton>
                <IconButton href="#" aria-label="Instagram">
                  <Instagram style={{ color: 'lightgray' }} />
                </IconButton>
                <IconButton href="#" aria-label="LinkedIn">
                  <LinkedIn style={{ color: 'lightgray' }} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>

          {/* Bottom Section: Copyright */}
          <Box mt={3} textAlign="center">
            <Typography variant="body2" color="textSecondary">
              © 2024 EduSparks. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </AppBar>
    </footer>
  );
};

export default Footer;
