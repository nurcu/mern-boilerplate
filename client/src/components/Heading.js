import React from "react";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

const Heading = () => {
    return (
        <>
            <header>
                <nav>
                    <li>
                        <Link to="/add">
                            <BiPlus/>
                            Add Position
                        </Link>
                    </li>
                </nav>
            </header>
        </>
    );
};

export default Heading;
