import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">React - GraphQL </Navbar.Brand>
          <Nav className="mr-auto">
            <div >
              <Link to="/" >
                <Button variant="light">Home </Button>
              </Link>
              <Link to="/new-message">
                <Button variant="light">New Message</Button>
              </Link>
            </div>
          </Nav>
        </Navbar>
      </>
    </div>
  );
}

export default Navigation;
