import React from 'react';
import qui from '../../../assets/images/quiz.jpeg'; 

const Quiz = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h2>Quizzes</h2>
          <h5>Time to Level Up: Turn Learning into Victory!</h5>

          {/* Tests */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '460px' }}>
                <img className="card-img-top" src={qui} alt="Test Image" />
                <div className="card-body">
                  <h5 className="card-title">Quiz on HTML</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="https://forms.gle/coi8wvWcBwCsr5E69" className="btn btn-primary">Give Test</a>
                </div>
              </div>
            </div>

            {/* Add more test cards as needed */}
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '460px' }}>
                <img className="card-img-top" src={qui} alt="Test Image" />
                <div className="card-body">
                  <h5 className="card-title">Quiz on CSS</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="https://forms.gle/91vaSgNyGbD9TkHr6" className="btn btn-primary">Give Test</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quizzes */}
          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '460px' }}>
                <img className="card-img-top" src={qui} alt="Quiz Image" />
                <div className="card-body">
                  <h5 className="card-title"> Quiz on Python </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="https://forms.gle/iJfawULM5FQm1Egs8" className="btn btn-primary">Give Test</a>
                </div>
              </div>
            </div>

            {/* Add more quiz cards as needed */}
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '460px' }}>
                <img className="card-img-top" src={qui} alt="Quiz Image" />
                <div className="card-body">
                  <h5 className="card-title"> Quiz on Java </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="https://forms.gle/kvNanKN8Cs4Sr1b46" className="btn btn-primary">Give Test</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
