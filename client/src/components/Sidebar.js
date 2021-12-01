import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Side = () => {


    return (
        <>

            <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link>
                        <Link to={"/create-position"} className="nav-link">
                            Create position
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to={"/list-position"} className="nav-link">
                            List positions
                        </Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>

        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar