import styled from 'styled-components';
import bigCirle from "../../assets/home/desktop/bg-pattern-hero-home.svg"

export const Intro = styled.main`
    background: var(--color-peach)  url(${bigCirle})  no-repeat 0;
    background-size: auto;

    h1, p {
       text-align: center;
       color: var(--color-white) ;
       font-weight: 400;
    }

    h1 {
       font-size: var(--font-size-1_5);
       letter-spacing: .2rem;
    }

    p {
        font-size: var(--font-size-1);
        padding: 1rem 0;
    }
`;