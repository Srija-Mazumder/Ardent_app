import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Card Component
const LibraryCard = ({ image, title, description, link }) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
    <div id={`carousel-${sectionTitle}`} className="carousel carousel-dark slide">
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
            <LibraryCard
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
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
      title: 'Python',
      image: 'path-to-python-image.jpg', // Replace with actual image path
      description: 'Learn Python programming.',
      link: 'https://www.python.org',
    },
    {
      title: 'HTML',
      image: 'path-to-html-image.jpg', // Replace with actual image path
      description: 'Learn HTML for web development.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      title: 'CSS',
      image: 'path-to-css-image.jpg', // Replace with actual image path
      description: 'Learn CSS for styling web pages.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      title: 'JavaScript',
      image: 'path-to-js-image.jpg', // Replace with actual image path
      description: 'Learn JavaScript for dynamic web development.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      title: 'React',
      image: 'path-to-react-image.jpg', // Replace with actual image path
      description: 'Learn React for building user interfaces.',
      link: 'https://reactjs.org',
    },
    {
      title: 'Node.js',
      image: 'path-to-node-image.jpg', // Replace with actual image path
      description: 'Learn Node.js for server-side development.',
      link: 'https://nodejs.org',
    },
    {
      title: 'Express',
      image: 'path-to-express-image.jpg', // Replace with actual image path
      description: 'Learn Express.js for building web applications.',
      link: 'https://expressjs.com',
    },
    {
      title: 'MongoDB',
      image: 'path-to-mongodb-image.jpg', // Replace with actual image path
      description: 'Learn MongoDB for NoSQL database.',
      link: 'https://www.mongodb.com',
    },
    {
      title: 'DSA',
      image: 'path-to-dsa-image.jpg', // Replace with actual image path
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
