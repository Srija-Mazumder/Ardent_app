import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import { GiTeacher } from "react-icons/gi";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link as RouterLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const defaultTheme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <RouterLink to="https://mui.com/" style={{ color: 'inherit' }}>
        EduSparks
      </RouterLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SignUp = () => {
  const [buttonText, setButtonText] = useState('Account type');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [anchorElAccount, setAnchorElAccount] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send signup request to backend
    const response = await fetch(`http://localhost:8000/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        accountType: buttonText,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Signup successful!');
    } else {
      alert('Signup failed: ' + result.error);
    }
  };

  const handleClickAccount = (event) => {
    setAnchorElAccount(event.currentTarget);
  };

  const handleCloseAccount = (type) => {
    if (type) setButtonText(type);
    setAnchorElAccount(null);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={formData.password}
                  onChange={handleChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* Dropdown for Account Type */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ fontSize: '16px', padding: '10px 20px' }}
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={handleClickAccount}
                >
                  {buttonText}
                </Button>
                <Menu
                  anchorEl={anchorElAccount}
                  open={Boolean(anchorElAccount)}
                  onClose={() => handleCloseAccount()}
                >
                  <MenuItem onClick={() => handleCloseAccount('Student')}>
                    <SchoolIcon sx={{ mr: 1 }} /> Student
                  </MenuItem>
                  <MenuItem onClick={() => handleCloseAccount('Instructor')}>
                    <GiTeacher style={{ marginRight: '5px' }} /> Instructor
                  </MenuItem>
                  <MenuItem onClick={() => handleCloseAccount('Admin')}>
                    <AdminPanelSettingsIcon sx={{ mr: 1 }} /> Admin
                  </MenuItem>
                </Menu>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <RouterLink to="/login">
                    Already have an account? Login
                  </RouterLink>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
