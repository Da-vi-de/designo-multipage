import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { QUERIES } from "../../utils/mediaQueries";

const Navigation = styled.nav`
    display: none;

    @media ${ QUERIES.tabletMini } {
        display: flex;

        ul {
            display: flex;
            justify-content: space-between;
        }

        li, a {
            font-size: var(--font-size-1);
            text-transform: uppercase;
            margin-right: 1rem;
            color: var(--color-black);
            text-decoration: none;
            letter-spacing: .1rem;
            list-style: none;

        &:focus-visible {
            outline: 2px solid var(--color-black);
            }
        }
    }
    `

function Navbar() {
    return(
        <Navigation role="navigation">
            <ul>
                <li><Link to="/about">our company</Link></li>
                <li><Link to="/locations">locations</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </Navigation>
    )
}

export default Navbar;
