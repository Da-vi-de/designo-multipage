import React from "react";
import { Link } from "react-router-dom";
import { bool } from 'prop-types';
import { StyledMenu } from '../../styles/home-styles/navigation-styles/MobileMenu.styled';


function Menu({ open }) {
    return(
        <StyledMenu role="navigation"  open={open}>
            <ul>
                <li><Link to="/about" className="underline-hover-effect" tabIndex="-1">our company</Link></li>
                <li><Link to="/locations" className="underline-hover-effect" tabIndex="-1">locations</Link></li>
                <li><Link to="/contact" className="underline-hover-effect" tabIndex="-1">contact</Link></li>
            </ul>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
  }

export default Menu;
