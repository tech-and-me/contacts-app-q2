import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = ({ contact }) => {
  const { name, email, phone } = contact;
  return (
    <div
      id="card"
      className="card h-100 text-white mx-2 p-2 rounded-4 border-2 border-white"
    >
      <div className="card-body">
        <h5 className="card-title text-info"> {name}</h5>
        <p className="card-text">
          <FaEnvelope /> {email}
        </p>
        <p className="card-text">
          <FaPhoneSquareAlt /> {phone}{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
