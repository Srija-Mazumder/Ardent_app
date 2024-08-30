import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import teachingStrategiesImage from '../../../assets/images/teachingstrategies.jpg';
import classroomManagementImage from '../../../assets/images/classroommanagement.jpg';
import assessmentToolsImage from '../../../assets/images/assesmenttool.jpg';
import educationalTechnologyImage from '../../../assets/images/educationtechnology.jpg';
import professionalDevelopmentImage from '../../../assets/images/professionaldevelopment.jpg';
import lessonPlanningImage from '../../../assets/images/lessonplanning.jpg';
import studentEngagementImage from '../../../assets/images/studentengagement.jpg';
import curriculumDesignImage from '../../../assets/images/curriculumdesign.jpg';
import classroomResourcesImage from '../../../assets/images/classroomresources.jpg';

// Card Component
const LibraryCard = ({ image, title, description, link }) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
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
      title: 'Teaching Strategies',
      image: teachingStrategiesImage, // Use imported image
      description: 'Explore various teaching strategies and techniques.',
      link: 'https://teachingstrategies.com/',
    },
    {
      title: 'Classroom Management',
      image: classroomManagementImage, // Use imported image
      description: 'Learn effective classroom management techniques.',
      link: 'https://www.futurelearn.com/info/blog/what-is-classroom-management',
    },
    {
      title: 'Assessment Tools',
      image: assessmentToolsImage, // Use imported image
      description: 'Find tools and methods for assessing student performance.',
      link: 'https://teaching.cornell.edu/learning-technologies/assessment-tools',
    },
    {
      title: 'Educational Technology',
      image: educationalTechnologyImage, // Use imported image
      description: 'Discover new educational technologies and their applications.',
      link: 'https://onlinedegrees.sandiego.edu/what-is-educational-technology-definition-examples-impact/',
    },
    {
      title: 'Professional Development',
      image: professionalDevelopmentImage, // Use imported image
      description: 'Access resources for your professional development.',
      link: 'https://professional.dce.harvard.edu/blog/why-is-professional-development-important/',
    },
    {
      title: 'Lesson Planning',
      image: lessonPlanningImage, // Use imported image
      description: 'Get tips and templates for effective lesson planning.',
      link: 'https://cte.smu.edu.sg/lesson-planning#:~:text=A%20lesson%20plan%20is%20the,obtain%20feedback%20on%20student%20learning.',
    },
    {
      title: 'Student Engagement',
      image: studentEngagementImage, // Use imported image
      description: 'Explore techniques to increase student engagement.',
      link: 'https://www.edglossary.org/student-engagement/',
    },
    {
      title: 'Curriculum Design',
      image: curriculumDesignImage, // Use imported image
      description: 'Learn about curriculum design and development.',
      link: 'https://www.thoughtco.com/curriculum-design-definition-4154176',
    },
    {
      title: 'Classroom Resources',
      image: classroomResourcesImage, // Use imported image
      description: 'Find various resources for classroom use.',
      link: 'https://www.twinkl.co.in/teaching-wiki/classroom-resources',
    },
  ];

  return (
    <div className="container-fluid">
      <div className="container">
        <h2>Instructor Library</h2>
        <h5>Access valuable resources for teaching and professional development!</h5>
        <CarouselSection sectionTitle="Teaching Resources" items={cardDetails} />
        <CarouselSection sectionTitle="Professional Development" items={cardDetails} />
      </div>
    </div>
  );
};

export default Library;
