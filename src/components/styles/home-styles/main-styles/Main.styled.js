import styled from 'styled-components';
import bigCirle from "../../../../assets/home/desktop/bg-pattern-hero-home.svg";
import PhoneImage from "../../../../assets/home/desktop/image-hero-phone.png";
import { QUERIES } from '../../../../utils/mediaQueries';

export const StyledMain = styled.main`
    margin-top: 1rem;
    background: var(--color-peach)  url(${bigCirle})  no-repeat 0;
    background-size: auto;

    .text-button-position {
        display: flex;
        flex-direction: column
    }

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
        margin-bottom: 1.5rem;
    }

    .phone-img {
        background-image: url(${PhoneImage});
        height: 26rem;
        background-repeat: no-repeat;
        background-size: 190%;
        background-position: 50% 21%;
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
            font-size: var(--font-size-1_25);
        }

        .phone-img {
            background-size: 100%;
        }
    }

    @media ${QUERIES.desktop} {
        background-position: 100% 50%;
        background-size: 58%;

        .content-position {
            display: flex;
            flex-direction: row;
        }

        .text-button-position {
            width: 35rem;
            position: relative;
            top: 24rem;
        }

        .phone-img {
            background-size: 50%;
            background-position: 100% 45%;
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

        @media ${QUERIES.megaDesktop} {
            .phone-img {
            background-size: 40%;
        }
      }
    }
`;