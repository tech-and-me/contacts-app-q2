import React from 'react';

const Contact = ({ contact }) => {
  const { name, email, phone } = contact;
  return (
    <div className="card h-100 bg-dark text-white rounded-3 border-3 border-info">
      <div className="card-body">
        <h5 className="card-title text-info">{name}</h5>
        <p className="card-text">{email}</p>
        <p className="card-text">{phone}</p>
      </div>
    </div>
  );
};

export default Contact;
