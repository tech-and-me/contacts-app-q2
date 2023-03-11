import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/logoWhitePhary.png"

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="40"
              height="45"
              className="d-inline-block align-centre"
            />{" "}
            <span>CONTACTS APP</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
