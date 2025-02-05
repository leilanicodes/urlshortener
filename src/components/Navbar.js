import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar"
      variant="light"
      fixed="top"
    >
      <Navbar.Brand className="brand">PERN URL</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto nav-items" activeKey="/">
          <Nav.Link
            eventKey={1}
            as={Link}
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            HOME
          </Nav.Link>

          <Nav.Link
            eventKey={2}
            as={Link}
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ABOUT
          </Nav.Link>

          <Nav.Link
            className="contact"
            href="https://leilanicodes.herokuapp.com/"
            target="_blank"
          >
            CONTACT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
