import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

//align to right side Nav

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/">
            <strong>Employee Managment System</strong>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink as={Link} to="/" className="nav-link">
              Employee
            </NavLink>
            <NavLink as={Link} to="/employee" className="nav-link">
              Post Employee
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
