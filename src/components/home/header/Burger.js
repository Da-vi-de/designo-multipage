import React from "react";
import { bool, func } from 'prop-types';
import { StyledBurger } from "../../styles/home/header/Burger.styled";

function Burger({open, setOpen}) {
    return(
        <>
            <StyledBurger
                open={open}
                onClick={() => setOpen(!open)}
                aria-label="Menu"
                aria-expanded={open ? "true" : "false"}
                aria-controls="nav"
            >
                <div ></div>
                <div></div>
                <div></div>
            </StyledBurger>
        </>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Burger;