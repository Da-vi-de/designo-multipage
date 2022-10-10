import React from "react";
import { Link } from "react-router-dom";
import { bool } from 'prop-types';
import { StyledMenu } from '../styles/MobileMenu.styled';


function Menu({ open }) {
    return(
        <StyledMenu role="navigation"  open={open}>
            <ul>
                <li><Link to="/about" className="underline-hover-effect">our company</Link></li>
                <li><Link to="/locations" className="underline-hover-effect">locations</Link></li>
                <li><Link to="/contact" className="underline-hover-effect">contact</Link></li>
            </ul>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
  }

export default Menu;
