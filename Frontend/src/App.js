import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Home page component
import Login from './Login'; // Login component
import SignUp from './Users/Students/Signup'; // SignUp component
import Student from './Users/Students'; // Student main component
import Instructor from './Users/Instructors'; // Instructor main component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home page */}
        <Route path="/login" element={<Login />} /> {/* Route for Login page */}
        <Route path="/signup" element={<SignUp />} /> {/* Route for SignUp page */}
        <Route path="/student/*" element={<Student />} /> {/* Base route for Student component */}
        <Route path="/instructor/*" element={<Instructor />} /> {/* Base route for Instructor component */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
