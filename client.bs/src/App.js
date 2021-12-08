import React from 'react';

import "bootstrap/dist/css/bootstrap.css"
import "./styles/curcumy.css"

import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Card, Container, Col, Row } from "react-bootstrap";
import CreatePosition from "./components/CreatePosition";
import EditPosition from "./components/EditPosition";
import PositionList from "./components/PositionList";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Container classname="content">
              <Topbar />
              <Switch>
                <Route path='/create-position' component={CreatePosition} />
                <Route path='/edit-position/:id' component={EditPosition} />
                <Route path='/list-position' component={PositionList} />
              </Switch>
            </Container>
            <Card body>Copyright © Curcumy 2021</Card>
          </Col>
        </Row>

      </Container>
    </Router>
  );
}

export default App;