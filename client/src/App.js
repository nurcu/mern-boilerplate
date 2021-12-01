import React from 'react';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css"
//import "./App.css"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreatePosition from "./components/CreatePosition";
import EditPosition from "./components/EditPosition";
import PositionList from "./components/PositionList";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>

              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                    Position Apps
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                  <Nav>
                    <Link to={"/create-position"} className="nav-link">
                      Create Position
                    </Link>
                  </Nav>

                  <Nav>
                    <Link to={"/list-position"} className="nav-link">
                        List Position
                    </Link>
                  </Nav>
              </Nav>

            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
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
      </div>
    </Router>
  );
}

export default App;