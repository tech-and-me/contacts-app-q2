import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/logoWhitePhary.png"

function Header() {
  return (
    <>
      <Navbar id="header" className="mt-0 pt-0">
        <Container >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="45"
              height="50"
              className="d-inline-block align-centre"
            />{" "}
            <span id="title">CONTACTS APP</span>
          </Navbar.Brand>
        </Container>   
      </Navbar>
    </>
  );
}

export default Header;
