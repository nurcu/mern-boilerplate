import React from 'react';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css"
import "./styles/curcumy.css"
import Logo from "./images/icon.svg"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Connect from "./components/Connect";
import Sidebar from "./components/Sidebar";
import CreatePosition from "./components/CreatePosition";
import EditPosition from "./components/EditPosition";
import PositionList from "./components/PositionList";

function App() {
  return (
    <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>

              <Navbar.Brand className="mr-auto">
                <Image src={Logo} roundedCircle />
              </Navbar.Brand>

              <Navbar.Toggle />
              <Nav className="ms-auto">
                  <Connect />
              </Nav>

            </Container>
          </Navbar>
        </header>
        <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">

            <div className="wrapper">
              <Switch>
                <Route path='/create-position' component={CreatePosition} />
                <Route path='/edit-position/:id' component={EditPosition} />
                <Route path='/list-position' component={PositionList} />
              </Switch>
            </div>
          </Col>
        </Row>

      </Container>
    </Router>
  );
}

export default App;