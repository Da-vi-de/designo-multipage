import styled from "styled-components";
import { QUERIES } from "../../../utils/mediaQueries";

import introBg from "../../../assets/web-design/desktop/bg-pattern-intro-web.svg";

export const Header = styled.header`
    background: var(--color-peach) url(${introBg}) no-repeat;
    background-position: 100% 0%;
    min-height: 20rem;
    display: grid;
    place-content: center;
    text-align: center;
    color: var(--color-white);
    padding: .5rem;

    h1 {
        font-size: var(--font-size-2);
        text-transform: capitalize;
    }

@media ${QUERIES.tabletMini} {
    max-width: min(90%);
    min-height: 15rem;
    margin: auto;
    border-radius: .5rem;

    h1 {
        font-size: 3rem;
    }

    p {
        padding: 1rem 9rem;
    }
}

@media ${QUERIES.megaDesktop} {
    background-position: 100% 50%;

    p {
        padding: 1rem 30rem;
    }
}
`