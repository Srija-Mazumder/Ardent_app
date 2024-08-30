import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import expr from "../../../assets/images/02.webp"; 
import mongo from "../../../assets/images/03.jpg";
import rea from "../../../assets/images/04.png";
import pyt from "../../../assets/images/05.jpg";
import nod from "../../../assets/images/06.png";
import javs from "../../../assets/images/07.png";
import htm from "../../../assets/images/08.jpg";
import css from "../../../assets/images/00.webp";
import dsa from "../../../assets/images/01.jpg";

// Card Component
const LibraryCard = ({ image, title, description, link }) => {
  return (
    <Card sx={{ maxWidth: '100%', mb: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image} // Use the image prop
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button size="small" href={link} target="_blank" rel="noopener noreferrer">
        Visit
      </Button>
    </Card>
  );
};

// CarouselSection Component
const CarouselSection = ({ sectionTitle, items }) => (
  <div className="my-5">
    <h3>{sectionTitle}</h3>
    <div id={`carousel-${sectionTitle}`} className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#carousel-${sectionTitle}`}
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            data-bs-interval="5000" // Transition interval (in milliseconds)
          >
            <div className="d-flex justify-content-center">
              <LibraryCard
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carousel-${sectionTitle}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel-${sectionTitle}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);

// Main Library Component
const Library = () => {
  const cardDetails = [
    {
      title: 'Express',
      image: expr, // Use imported image
      description: 'Learn Express.js for building web applications.',
      link: 'https://expressjs.com',
    },
    {
      title: 'MongoDB',
      image: mongo, // Use imported image
      description: 'Learn MongoDB for NoSQL database.',
      link: 'https://www.mongodb.com',
    },
    {
      title: 'React',
      image: rea, // Use imported image
      description: 'Learn React for building user interfaces.',
      link: 'https://reactjs.org',
    },
    {
      title: 'Python',
      image: pyt, // Use imported image
      description: 'Learn Python programming.',
      link: 'https://www.python.org',
    },
    {
      title: 'Node.js',
      image: nod, // Use imported image
      description: 'Learn Node.js for server-side development.',
      link: 'https://nodejs.org',
    },
    {
      title: 'JavaScript',
      image: javs, // Use imported image
      description: 'Learn JavaScript for dynamic web development.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      title: 'HTML',
      image: htm, // Use imported image
      description: 'Learn HTML for web development.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      title: 'CSS',
      image: css, // Use imported image
      description: 'Learn CSS for styling web pages.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      title: 'DSA',
      image: dsa, // Use imported image
      description: 'Learn Data Structures and Algorithms.',
      link: 'https://www.geeksforgeeks.org/data-structures/',
    },
  ];

  return (
    <div className="container-fluid">
      <div className="container">
        <h2>Library</h2>
        <h5>Access valuable resources and learning platforms!</h5>
        <CarouselSection sectionTitle="W3Schools" items={cardDetails} />
        <CarouselSection sectionTitle="MDN" items={cardDetails} />
        <CarouselSection sectionTitle="GeeksforGeeks" items={cardDetails} />
      </div>
    </div>
  );
};

export default Library;
