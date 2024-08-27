import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './Login';
import SignUp from './Users/Students/Signup';
import Student from './Users/Students';
import FirstHeader from './FirstHeader';

const App = () => {
  return (
    <>
    <BrowserRouter>
       {/* The header is displayed on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Route */}
        <Route path="/login" element={<Login />} /> {/* Login Route */}
        <Route path="/signup" element={<SignUp />} /> {/* Signup Route */}
        <Route path="/students" element={<Student />} /> {/* Students Route */}
      </Routes>
    </BrowserRouter>
    {/* <Student/> */}
    </>
  );
}

export default App;
