import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

// Course Component
const Course = ({ course, handleEdit, handleViewSubmissions }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 350 }}>
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
      <CardActions sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
        <Button 
          size="small" 
          variant="outlined" 
          color="primary"
          onClick={() => handleEdit(course)}
        >
          Edit
        </Button>
        <Button 
          size="small" 
          variant="contained" 
          color="secondary"
          onClick={() => handleViewSubmissions(course)}
        >
          View Submissions
        </Button>
      </CardActions>
    </Card>
  );
};

// Teacher Dashboard Component
const TeacherCourseList = () => {
  const courses = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn the basics of React and build dynamic web applications.',
      image: rea,
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript and learn advanced concepts.',
      image: javs,
    },
    {
      id: 3,
      title: 'Introduction to Python',
      description: 'Learn Python from scratch with hands-on examples.',
      image: pyt,
    },
    {
      id: 4,
      title: 'Node.js Fundamentals',
      description: 'Get started with Node.js for backend development.',
      image: nod,
    },
    {
      id: 5,
      title: 'Express.js Essentials',
      description: 'Learn to build backend services with Express.js.',
      image: expr,
    },
    {
      id: 6,
      title: 'Mastering MongoDB',
      description: 'Understand MongoDB, a NoSQL database, and use it in your projects.',
      image: mongo,
    },
    {
      id: 7,
      title: 'Data Structures & Algorithms',
      description: 'Learn essential data structures and algorithms for coding interviews.',
      image: dsa,
    },
    {
      id: 8,
      title: 'HTML & CSS Basics',
      description: 'Learn how to structure and style websites using HTML and CSS.',
      image: htm,
    },
    {
      id: 9,
      title: 'Version Control with Git & GitHub',
      description: 'Master version control and collaboration with Git and GitHub.',
      image: css,
    },
  ];

  const handleEdit = (course) => {
    console.log('Edit Course:', course);
  };

  const handleViewSubmissions = (course) => {
    console.log('View Submissions for Course:', course);
  };

  return (
    <Box className="container" sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Courses
      </Typography>
      <Box 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {courses.map((course) => (
          <Box key={course.id} sx={{ flexBasis: '30%', marginBottom: '2%' }}>
            <Course course={course} handleEdit={handleEdit} handleViewSubmissions={handleViewSubmissions} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TeacherCourseList;