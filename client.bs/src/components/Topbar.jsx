import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Connect from "./Connect";

const Topbar = () => {


    return (
        <Navbar>
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Item>
                        <Connect />
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};
export default Topbar;