import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School'; // Icon for Student
import { GiTeacher } from "react-icons/gi";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; // Icon for Admin


function Copyright(props) { 
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const SignUp = () => {
  const [buttonText, setButtonText] = useState('Account type');
  const [selectedAvatar, setSelectedAvatar] = useState("Choose your Avatar");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
                <div className="dropdown mb-2">
                  <a
                    className="btn btn-primary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: '16px', padding: '10px 20px' }}
                  >
                    {buttonText}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setButtonText('Student')}>
                        <SchoolIcon sx={{ mr: 1 }} /> Student
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setButtonText('Instructor')}>
                        <GiTeacher sx={{ mr: 1 }} /> Instructor
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setButtonText('Admin')}>
                        <AdminPanelSettingsIcon sx={{ mr: 1 }} /> Admin
                      </a>
                    </li>
                  </ul>
                </div>
              </Grid>
              {/* Dropdown for Avatar Selection */}
              <Grid item xs={12}>
                <div className="dropdown mb-2">
                  <a
                    className="btn btn-primary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: '16px', padding: '10px 20px' }}
                  >
                    {selectedAvatar ? selectedAvatar : 'Select Avatar'}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setSelectedAvatar('Avatar 1')}>Avatar 1</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setSelectedAvatar('Avatar 2')}>Avatar 2</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => setSelectedAvatar('Avatar 3')}>Avatar 3</a>
                    </li>
                  </ul>
                </div>
              </Grid>
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
                <Link href="#" variant="body2">
                  Already have an account? Login
                </Link>
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
