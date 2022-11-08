import styled from 'styled-components';
import bigCirle from "../../../../assets/home/desktop/bg-pattern-hero-home.svg";
import { QUERIES } from '../../../../utils/mediaQueries';

export const StyledHeader = styled.header`
    margin-top: 1rem;
    padding-top: 4rem;
    background: var(--color-peach)  url(${bigCirle})  no-repeat 0;
    background-size: auto;
    overflow: hidden;

    .text-button-position {
        display: flex;
        flex-direction: column;
    }

    h1, p {
       text-align: center;
       color: var(--color-white) ;
    }

    h1 {
       font-size: var(--font-size-1_5);
       letter-spacing: .2rem;
       font-weight: 500;
    }

    p {
        font-size: var(--font-size-1);
        padding: 1rem 0;
        margin-bottom: 1.5rem;
        font-weight: 400;
    }

    .img-container {
        display: flex;
        justify-content: center;
        position: relative;
        height: 30rem;
  }

    .phone-img {
        max-width: 100rem;
        height: 50rem;
    }

    @media ${QUERIES.tabletMini} {
        max-width: min(90%);
        margin: auto;
        border-radius: .5rem;
        background-position: 250% 50%;

        h1, p {
            margin: 1.3rem  0;
        }

        h1 {
            padding: 0 2rem;
            font-size: var(--font-size-2_5);
            font-weight: bold;
            line-height: 2.5rem;
        }

        p {
            padding: 0 2.5rem;
            padding-bottom: 2rem;
            font-size: var(--font-size-1_25);
        }
}

    @media ${QUERIES.desktop} {
        background-position: 100% 50%;
        background-size: 45%;

        .content-position {
            display: flex;
            flex-direction: row;
        }

        .text-button-position {
            width: 35rem;
            position: relative;
            top: 2rem;
        }

        h1, p {
            text-align: left;
        }

        h1 {
            line-height: 3rem;
        }

        p {
            margin-bottom: 3rem;
        }

        .img-container {
            justify-content: flex-end;
            height: 10rem;
        }

        .phone-img {
            height: 70rem;
            margin-top: -39rem;
            transform: translateX(6rem);
        }
    }
`;