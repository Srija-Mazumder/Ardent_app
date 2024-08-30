import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Using Grid for responsive layout
import Box from '@mui/material/Box';
import expr from "../../../assets/images/02.webp"; 
import mongo from "../../../assets/images/03.jpg";
import rea from "../../../assets/images/04.png";
import pyt from "../../../assets/images/05.jpg";
import nod from "../../../assets/images/06.png";
import javs from "../../../assets/images/07.png";
import htm from "../../../assets/images/08.jpg";
import css from "../../../assets/images/00.webp";
import dsa from "../../../assets/images/01.jpg";
import Footer from '../../../Footer';

// Course Component
const Course = ({ course, handleBuy }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt={course.title}
        height="140"
        image={course.image}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button 
          size="small" 
          variant="contained" 
          color="primary"
          onClick={() => handleBuy(course)}
        >
          Buy
        </Button>
        <Typography variant="h6" component="div">
          ₹{course.price}
        </Typography>
      </CardActions>
    </Card>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [courses] = useState([
    {
      id: 1,
      title: 'Introduction to Python',
      description: 'Learn Python from scratch with hands-on examples.',
      image: pyt,
      price: 499,
    },
    {
      id: 2,
      title: 'HTML',
      description: 'Learn how to structure and style websites using HTML and CSS.',
      image: htm,
      price: 299,
    },
    {
      id: 3,
      title: 'CSS',
      description: 'Master version control and collaboration with Git and GitHub.',
      image: css,
      price: 299,
    },
    {
      id: 4,
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript and learn advanced concepts.',
      image: javs,
      price: 399,
    },
    {
      id: 5,
      title: 'React for Beginners',
      description: 'Learn the basics of React and build dynamic web applications.',
      image: rea,
      price: 499,
    },
    {
      id: 6,
      title: 'Node.js Fundamentals',
      description: 'Get started with Node.js for backend development.',
      image: nod,
      price: 499,
    },
    {
      id: 7,
      title: 'Express.js Essentials',
      description: 'Learn to build backend services with Express.js.',
      image: expr,
      price: 399,
    },
    {
      id: 8,
      title: 'Mastering MongoDB',
      description: 'Understand MongoDB, a NoSQL database, and use it in your projects.',
      image: mongo,
      price: 399,
    },
    {
      id: 9,
      title: 'Data Structures & Algorithms',
      description: 'Learn essential data structures and algorithms for coding interviews.',
      image: dsa,
      price: 599,
    },
  ]);

  const navigate = useNavigate(); // for navigation

  const handleBuy = (course) => {
    navigate(`/student/payment/${course.id}`);
  };

  return (
    <>
      <Box className="container" sx={{ textAlign: 'center', p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Available Courses
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
              <Course course={course} handleBuy={handleBuy} />
            </Grid>
          ))}
        </Grid>
      </Box>
      
    </>
  );
};

export default Dashboard;
