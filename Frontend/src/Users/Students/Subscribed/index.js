import React from 'react';
import { FaVolumeUp } from 'react-icons/fa'; // Import loudspeaker icon

const Subscribed = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          {/* Announcements Section */}
          <div className="mt-5">
            <h3><FaVolumeUp /> Announcements</h3>
            <div className="card" style={{ height: '200px' }}>
              <div className="card-body">
                <p className="card-text">
                  Here you will receive the latest announcements and updates from our team. Stay tuned for important information!
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-5">
            <h3>Coming Soon</h3>
            <div className="card" style={{ height: '200px' }}>
              <div className="card-body">
                <h5 className="card-title">Our Paid Courses</h5>
                <p className="card-text">
                  We are excited to announce that our paid courses will be available soon. Stay tuned for more information and updates!
                </p>
              </div>
            </div>
          </div>
          <h2>Tests</h2>
          <h5>Time to Level Up: Turn Learning into Victory!</h5>

          {/* Tests */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '400px' }}>
                <img className="card-img-top" src="..." alt="Test Image" />
                <div className="card-body">
                  <h5 className="card-title">Test Title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '400px' }}>
                <img className="card-img-top" src="..." alt="Test Image" />
                <div className="card-body">
                  <h5 className="card-title">Another Test Title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quizzes */}
          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '400px' }}>
                <img className="card-img-top" src="..." alt="Quiz Image" />
                <div className="card-body">
                  <h5 className="card-title">Quiz Title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '400px' }}>
                <img className="card-img-top" src="..." alt="Quiz Image" />
                <div className="card-body">
                  <h5 className="card-title">Another Quiz Title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Subscribed;
