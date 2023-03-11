import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logoWhitePhary.png";

const Footer = () => {
  return (
    <Container fluid className="text-center" id="footer">
      <hr />
      <img
        alt=""
        src={logo}
        width="35"
        height="40"
        className="block align-centre"
      />
      <p className="text-white fst-italic pt-0 pb-2 mb-0 text-center">
        Developed by Phary Phal @2023
      </p>
    </Container>
  );
};

export default Footer;
