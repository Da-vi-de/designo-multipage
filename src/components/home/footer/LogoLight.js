import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/shared/desktop/logo-light.png";
import { QUERIES } from "../../../utils/mediaQueries";

const Logo = styled.img`
    width: 12.6rem;
    height: 1.6rem;
    margin-top: 4rem;

    @media ${QUERIES.tabletMini} {
        margin-left: 2rem;
    }

    @media ${QUERIES.megaDesktop} {
        margin-left: 4rem;
    }
`
function LogoLight() {
    return(
        <Link to="/">
            <Logo src={logo} alt="logo"/>
        </Link>
    )
}

export default LogoLight;