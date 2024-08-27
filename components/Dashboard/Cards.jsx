import React from 'react';

const Cards = ({ icon, title, value }) => {
  return (
    <div className="card text-center h-100 shadow-sm" style={{ backgroundColor: 'white', height: '200px' }}>
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <div className="mb-2">{icon}</div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{value}</p>
      </div>




    </div>




  );
};

export default Cards;
