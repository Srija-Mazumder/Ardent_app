import React from 'react';
import { FaVolumeUp } from 'react-icons/fa'; 
import im1 from "../../../assets/images/gold batch.webp";
import im2 from "../../../assets/images/silver.jpeg"
import im3 from "../../../assets/images/Frontendd.jpeg"
import im4 from "../../../assets/images/backend.jpeg"

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

        

        <div className='mt-5'>
          <h2>Subscription batches available</h2>
            <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '400px' }}>
                <img className="card-img-top" src={im1} alt="Test Image" />
                <div className="card-body">
                  <h5 className="card-title">Batch 1 </h5>
                  
                  <a href="#" className="btn btn-primary mt-3">Subscribe</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '400px' }}>
                <img className="card-img-top" src={im2} alt="Test Image" />
                <div className="card-body">
                  <h5 className="card-title">Batch 2</h5>
                  
                  <a href="#" className="btn btn-primary mt-3">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Quizzes */}
          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '400px' }}>
                <img className="card-img-top" src={im3} alt="Quiz Image" />
                <div className="card-body">
                  <h5 className="card-title">Batch 3</h5>
                  
                  <a href="#" className="btn btn-primary mt-3">Subscribe</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '400px' }}>
                <img className="card-img-top" src={im4} alt="Quiz Image" />
                <div className="card-body">
                  <h5 className="card-title">Batch 4</h5>
                 
                  <a href="#" className="btn btn-primary mt-3">Subscribe</a>
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
