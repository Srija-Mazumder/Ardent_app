import React from 'react';
import test from '../../../assets/images/test2.jpeg'; // Ensure the path is correct

const Test = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h2>Tests</h2>
          <h5>Time to Level Up: Turn Learning into Victory!</h5>

          {/* Tests */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '460px' }}>
                <img className="card-img-top" src={test} alt="Test Image" />
                <div className="card-body">
                  <h5 className="card-title">Test on Javascript </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="https://forms.gle/YMcz62tEAcjX4VtZ8" className="btn btn-primary">Give Test</a>
                </div>
              </div>
            </div>

            {/* Add more test cards as needed */}
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '460px' }}>
                <img className="card-img-top" src={test} alt="Test Image" />
                <div className="card-body">
                  <h5 className="card-title">Test on Node and Express</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="https://forms.gle/jffYnkhUzNFBAmvFA" className="btn btn-primary">Give Test</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quizzes */}
          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '460px' }}>
                <img className="card-img-top" src={test} alt="Quiz Image" />
                <div className="card-body">
                  <h5 className="card-title"> Test on React </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="https://forms.gle/1FhKvnLLwM4hCLZa6" className="btn btn-primary">Give Test</a>
                </div>
              </div>
            </div>

            {/* Add more quiz cards as needed */}
            <div className="col-md-6 mb-4">
              <div className="card" style={{ height: '460px' }}>
                <img className="card-img-top" src={test} alt="Quiz Image" />
                <div className="card-body">
                  <h5 className="card-title"> Test on Mongodb </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="https://forms.gle/nfsXx26t6GCNezaJ7" className="btn btn-primary">Give Test</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
