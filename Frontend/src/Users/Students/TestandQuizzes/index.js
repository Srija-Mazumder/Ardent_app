import React from 'react';
import testImage from '../../../assets/images/test2.jpeg';
import quizImage from '../../../assets/images/quiz.jpeg';
import { Link } from 'react-router-dom'; // Import Link for routing

const TestandQuizzes = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h2>Test and Quizzes</h2>
          <h5>Time to Level Up: Turn Learning into Victory!</h5>

          {/* Tests */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '460px' }}>
                <img className="card-img-top " src={testImage} alt="Test Image" />
                <div className="card-body">
                  <h5 className="card-title">Test</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <Link to="/test" className="btn btn-primary">Give a Test</Link> {/* Correct Link */}
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '460px' }}>
                <img className="card-img-top " src={quizImage} alt="Quiz Image" />
                <div className="card-body">
                  <h5 className="card-title">Quiz</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <Link to="/quiz" className="btn btn-primary">Take a Quiz</Link> {/* Correct Link */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestandQuizzes;
