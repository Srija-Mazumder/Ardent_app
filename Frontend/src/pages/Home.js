import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../Footer';
import FirstHeader from '../FirstHeader';

import expr from "../assets/images/02.webp"; 
import mongo from "../assets/images/03.jpg";
import rea from "../assets/images/04.png";
import pyt from "../assets/images/05.jpg";

const Home = () => {
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
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
     <FirstHeader/>
      <div className='homepage'>
        <div className="specific-section">
          {/* Introduction about EduSparks */}
          <div className="intro-section">
            <h1>Welcome to EduSparks</h1>
            <p>
              EduSparks is a modern e-learning platform dedicated to front-end and back-end learning.
              Whether you're a student eager to learn or a teacher ready to share knowledge, EduSparks
              is the place for you. Students can purchase courses tailored to their needs, access
              links to renowned websites for theoretical knowledge, and participate in quizzes and
              tests to assess their progress—all in one place. For teachers, the platform offers
              the ability to conduct live classes, upload lessons, and manage their teaching schedule
              with ease. EduSparks brings everything you need to succeed under one roof.
            </p>
          </div>
          {/* Teachers' Section */}
          <div className="teacher-section">
            <h2>For Teachers</h2>
            <p>
              EduSparks is designed not just for learners but also for educators. Teachers can take advantage of our platform
              to conduct live classes, upload course materials, and manage their students efficiently. Whether you want to
              teach front-end, back-end, or any other specialized subject, EduSparks provides the tools and audience to help
              you succeed in your teaching journey.
            </p>
          </div>
        </div>

        {/* Carousel for Courses */}
        <div className='container-fluid'>
          <h2>Courses Offered Here</h2>
          <div className='row'>
            <Carousel 
              responsive={responsive} 
              autoPlay={true}
              autoPlaySpeed={3000} // Set the speed of the automatic transition
              infinite={true} // Ensures the carousel loops infinitely
              keyBoardControl={true} // Allow keyboard control
              transitionDuration={500} // Transition duration in ms
            >
              <div className="homecard">
                <img src={expr} alt="Express JS" className="homecard-img-top" />
                <div className="homecard-body">
                  <h3 className="homecard-title">Express JS</h3>
                </div>
              </div>
              <div className="homecard">
                <img src={mongo} alt="MongoDB" className="homecard-img-top" />
                <div className="homecard-body">
                  <h3 className="homecard-title">MongoDB</h3>
                </div>
              </div>
              <div className="homecard">
                <img src={rea} alt="ReactJS" className="homecard-img-top" />
                <div className="homecard-body">
                  <h3 className="homecard-title">ReactJS</h3>
                </div>
              </div>
              <div className="homecard">
                <img src={pyt} alt="Python" className="homecard-img-top" />
                <div className="homecard-body">
                  <h3 className="homecard-title">Python</h3>
                </div>
              </div>
              {/* Add more cards as needed */}
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
