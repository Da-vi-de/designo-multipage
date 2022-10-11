import styled from "styled-components";
import { QUERIES } from "../../../../utils/mediaQueries";
import { CommonHover } from "../../shared-style/CommonHover.styled";

export const StyledNavigation = styled.nav`
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
            margin-right: .5rem;
            margin-left: .5rem;
            color: var(--color-black);
            text-decoration: none;
            letter-spacing: .1rem;
            list-style: none;

        &:focus-visible {
            outline: 4px solid var(--color-black);
            }
        }

        ${CommonHover}
        .underline-hover-effect::before {
            background-color: var(--color-black);
        }

    }
    `