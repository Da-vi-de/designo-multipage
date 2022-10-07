import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/shared/desktop/logo-dark.png"

const Logo = styled.img`
    max-width: 12rem;
    height: auto;
    margin-right: 3.5rem;
    margin-top: 1rem;

    &:focus-visible {
        outline: 2px solid var(--color-black);
    }
`
function LogoDark() {
    return(
        <Link to="/">
            <Logo src={logo} alt="logo"/>
        </Link>
    )
}

export default LogoDark;