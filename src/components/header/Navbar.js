import React from "react";
import { Link } from "react-router-dom";
import { StyledNavigation } from "../styles/Navigation.styled";

function Navbar() {
    return(
        <StyledNavigation>
            <ul>
                <li><Link to="/about" className="underline-hover-effect">our company</Link></li>
                <li><Link to="/locations" className="underline-hover-effect">locations</Link></li>
                <li><Link to="/contact" className="underline-hover-effect">contact</Link></li>
            </ul>
        </StyledNavigation>
    )
}

export default Navbar;
