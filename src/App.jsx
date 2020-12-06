import React from 'react';
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
// The App component is the main component that we use 
// to hold and run all the other components.
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div id="all-nav-bar">
        <Navbar className="collapseOnSelect" expand="lg" bg="transparent" variant="light">
                <Navbar.Brand href="#home"><b>KOYENA PAL</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mx-4" href="#projects">Projects</Nav.Link>
                        <Nav.Link className="mx-4" href="#pricing">About</Nav.Link>
                        <Nav.Link className="mx-4" href="#deets">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

        </div>
    )}
}
