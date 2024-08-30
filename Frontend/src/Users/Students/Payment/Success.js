import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Success = () => {
  return (
    <div className="container my-5">
      <div className="border-top border-secondary bg-dark" style={{ height: '6px', borderRadius: '6px 6px 0 0' }}></div>

      <div className="position-relative overflow-hidden" style={{ height: '467px' }}>
        <div className="border-bottom border-secondary bg-dark" style={{ height: '6px', borderRadius: '0 0 6px 6px' }}></div>

        <div className="bg-white p-4 position-absolute w-100" style={{ height: '447px', zIndex: 2, margin: '0 12px', marginTop: '-12px', animation: 'print 5s cubic-bezier(0.68, -0.55, 0.265, 0.9) infinite' }}>
          <div className="text-center">
            <div className="bg-success text-white rounded-circle mx-auto" style={{ fontSize: '48px', width: '72px', height: '72px' }}>
              <span role="img" aria-label="checkmark">&#10004;</span>
            </div>
            <h2 className="my-3" style={{ color: '#666', fontWeight: 'bold' }}>Payment Complete</h2>
            <p className="text-muted mb-4">Thank you for completing the payment! You will shortly receive an email of your payment.</p>
            <div className="text-center">
              <div className="h5 mb-2" style={{ color: '#333', fontWeight: 'bold' }}>Transaction ID</div>
              <div className="border-top border-bottom border-secondary py-2 mb-4" style={{ fontSize: '48px' }}>123456789</div>
              <div className="h5" style={{ color: '#32a852' }}>Thank You!</div>
            </div>
          </div>
          <div className="position-relative" style={{ height: '20px', width: '100%', marginTop: '-1px' }}>
            <div className="position-absolute" style={{ left: 0, right: 0, height: '20px', background: 'linear-gradient(45deg, transparent 33.333%, #ffffff 33.333%, #ffffff 66.667%, transparent 66.667%), linear-gradient(-45deg, transparent 33.333%, #ffffff 33.333%, #ffffff 66.667%, transparent 66.667%)', backgroundSize: '16px 40px', backgroundPosition: '0 -20px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
