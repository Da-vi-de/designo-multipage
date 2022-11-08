import styled from "styled-components";
import { QUERIES } from "../../../../utils/mediaQueries";

import bgThreeCircles from "../../../../assets/shared/desktop/bg-pattern-three-circles.svg";

export const StyledGetInTouch = styled.div`
    position: relative;
    max-width: 90%;
    top: -7rem;
    padding: 2rem 3rem;
    background: var(--color-peach)  url(${bgThreeCircles})  no-repeat;
    background-size: 30rem;
    background-position: 0;
    color: var(--color-white);
    text-align: center;
    border-radius: .5rem;

    .title{
        font-size: var(--font-size-2);
        font-weight: 500;
        line-height: 1.2;
    }

    .text-container{
        margin-top: 1rem;
        margin-bottom: 3rem;
    }

    .btn-link-container {
        margin-bottom: 4rem;
    }

    @media ${QUERIES.tabletMini} {
        margin: auto;
        background-repeat: repeat;

        .title-container {
            width: 50%;
            transform: translateX(50%);
        }

        .text-container {
            width: 73%;
            transform: translateX(20%);
        }

        .title {
            font-size: var(--font-size-2_5);
        }

        .text {
            font-size: var(--font-size-1_25);
        }

    @media ${QUERIES.desktop} {
        .content-desktop-position {
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            text-align: left;
            transform: translateY(35%);
        }

        .title-container {
            width: 53%;
            transform: translateX(10%);
        }

        .text-container {
            width: 100%;
            transform: translateX(5%);
        }

        .btn-link-container {
            float: right;
            transform: translateY(-300%);
        }
      }

      @media ${QUERIES.megaDesktop} {
        width: 100%;
      }
    }
`