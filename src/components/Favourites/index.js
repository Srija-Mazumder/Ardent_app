import React from 'react';

const Favourites = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
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
            
            {/* Add more test cards as needed */}
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

            {/* Add more quiz cards as needed */}
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

export default Favourites;
