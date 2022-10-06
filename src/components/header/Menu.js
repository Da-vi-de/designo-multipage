import React from "react";
import { Link } from "react-router-dom";
import { bool } from 'prop-types';
import { StyledMenu } from '../styles/Menu.styled';

function Menu({ open }) {
    return(
        <StyledMenu role="navigation"  open={open}>
            <ul>
                <li><Link to="/about">our company</Link></li>
                <li><Link to="/locations">locations</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
  }

export default Menu;
