import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './LoggedIn.css'
import logo from './../images/logo3.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

library.add(faChevronDown, faBell)


function LoggedInResponsive() {
  return (
    <Navbar className="resize" bg="white" expand="lg">
      <Container className="logo-container">
        <Navbar.Brand id = "nav-logo-container" href="exqure-frontend/">
          <img id = "nav-logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link href="/exqure-frontend/transactions">Transactions</Nav.Link>
            <NavDropdown title="Customer Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="/exqure-frontend/homepage">Homepage</NavDropdown.Item>
              <NavDropdown.Item href="/exqure-frontend/transactions-crypto">Crypto</NavDropdown.Item>
              <NavDropdown.Item href="/exqure-frontend/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/exqure-frontend/">Coming Soon</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#link">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Help</Nav.Link>
            <Navbar.Brand className = "nav-links" href="exqure-frontend/">
              <Nav.Link href="#link">
                <FontAwesomeIcon icon="fa-regular fa-bell" />
              </Nav.Link>
              <NavDropdown title="VA" className="userpreview" id="basic-nav-dropdown">
                <NavDropdown.Item href="#link">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#link">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#link">Logout</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LoggedInResponsive;