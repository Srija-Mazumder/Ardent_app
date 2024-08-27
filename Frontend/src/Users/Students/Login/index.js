import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import { GiTeacher } from "react-icons/gi";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import login from '../../assets/images/login.png';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setLoggedInUser(`${data.firstName} ${data.lastName}`);

        // Redirect based on user role
        if (data.role === 'Student') {
          navigate("/students");
        } else if (data.role === 'Instructor') {
          navigate("/instructors"); // Assuming you have an Instructors component
        } else if (data.role === 'Admin') {
          navigate("/admin"); // Assuming you have an Admin component
        } else {
          alert("Unknown role. Please contact support.");
        }
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center p-0" style={{ height: '100vh', backgroundColor: '#fff' }}>
      <div className="row w-100 h-100 m-0">
        <div
          className="col-12 col-md-6 d-none d-md-block position-relative"
          style={{
            backgroundImage: `url(${login})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}></div>
        </div>

        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div className="right col-10 col-lg-10 p-4 shadow rounded m-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', zIndex: 2 }}>
            <div className="form2">
              <h4 className="text-center mb-2">EduSparks</h4>
              <h6 className="text-center mb-3">Login</h6>

              <form onSubmit={handleLogin}>
                <div className="mb-2">
                  <label htmlFor="exampleInputEmail1" className="form-label" style={{ fontSize: '12px' }}>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{ fontSize: '12px' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label" style={{ fontSize: '12px' }}>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    style={{ fontSize: '12px' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="dropdown mb-2">
                  {!loggedInUser && (
                    <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '12px' }}>
                      Account
                    </a>
                  )}
                  {!loggedInUser && (
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <SchoolIcon fontSize="small" /> Student
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <GiTeacher size="1.2em" /> Instructor
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <AdminPanelSettingsIcon fontSize="small" /> Admin
                        </a>
                      </li>
                    </ul>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ fontSize: '12px' }}>Submit</button>

                <div className="d-flex flex-row justify-content-between g-4">
                  <p className="p-2" style={{ fontSize: '12px' }}>
                    Don't have an account? <Link to="/signup" className="text-primary">Signup</Link>
                  </p>
                  <p className="p-2" style={{ fontSize: '12px' }}>
                    <a href="/" className="text-primary">Forgot password</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
