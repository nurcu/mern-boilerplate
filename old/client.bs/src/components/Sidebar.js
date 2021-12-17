import React from "react";
import { Nav, Navbar, Image, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Logo from "../images/icon.svg";
import {BiTable} from "react-icons/bi";

const Side = () => {


    return (
        <Navbar>
            <Navbar.Brand>
                <Image src={Logo}/>
            </Navbar.Brand>
            <Nav 
            className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
            <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Link to="/create-position">
                        <Button style={{'borderRadius':'30px', 'height':'60px', 'width': '200px'}}>{BiTable}&emsp;Create Position</Button>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/list-position">
                        <Button style={{'borderRadius':'30px', 'height':'60px', 'width': '200px'}}>{BiTable}&emsp;List Positions</Button>
                    </Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar