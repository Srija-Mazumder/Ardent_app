import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import expr from "../../../assets/images/02.webp"; 
import mongo from "../../../assets/images/03.jpg";
import rea from "../../../assets/images/04.png";
import pyt from "../../../assets/images/05.jpg";

const First = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };

  return (
    <div className='homepage'>
      <div className="specific-section">
        {/* Introduction about EduSparks */}
        <div className="intro-section text-center px-3">
          <h1 className="display-4">Welcome to EduSparks</h1>
          <p className="lead">
            EduSparks is a modern e-learning platform dedicated to front-end and back-end learning.
            Whether you're a student eager to learn or a teacher ready to share knowledge, EduSparks
            is the place for you. Students can purchase courses tailored to their needs, access
            links to renowned websites for theoretical knowledge, and participate in quizzes and
            tests to assess their progress—all in one place. For teachers, the platform offers
            the ability to conduct live classes, upload lessons, and manage their teaching schedule
            with ease. EduSparks brings everything you need to succeed under one roof.
          </p>
        </div>
      </div>

      {/* Carousel for Courses */}
      <div className='container-fluid py-4'>
        <h2 className="text-center mb-4">Courses Offered Here</h2>
        <Carousel 
          responsive={responsive} 
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="px-2"
        >
          <div className="homecard">
            <img src={expr} alt="Express JS" className="homecard-img-top img-fluid" style={{height:"80%"}}/>
            <div className="homecard-body text-center">
              <h3 className="homecard-title">Express JS</h3>
            </div>
          </div>
          <div className="homecard">
            <img src={mongo} alt="MongoDB" className="homecard-img-top img-fluid" style={{height:"80%"}}/>
            <div className="homecard-body text-center">
              <h3 className="homecard-title">MongoDB</h3>
            </div>
          </div>
          <div className="homecard">
            <img src={rea} alt="ReactJS" className="homecard-img-top img-fluid" style={{height:"80%"}}/>
            <div className="homecard-body text-center">
              <h3 className="homecard-title">ReactJS</h3>
            </div>
          </div>
          <div className="homecard">
            <img src={pyt} alt="Python" className="homecard-img-top img-fluid" style={{height:"80%"}}/>
            <div className="homecard-body text-center">
              <h3 className="homecard-title">Python</h3>
            </div>
          </div>
          {/* Add more cards as needed */}
        </Carousel>
      </div>
    </div>
  );
}

export default First;
