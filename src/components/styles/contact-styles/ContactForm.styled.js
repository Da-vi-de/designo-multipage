import styled from "styled-components";

import twoCircles from "../../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";

export const StyledContacForm = styled.main`
    background-color: var(--color-peach);
    background-image: url(${twoCircles});
    background-repeat: no-repeat;
    background-position: 20% 0;
    max-height: 100%;
    margin-top: 1rem;

    .content {
        padding: 3rem .5rem;
        text-align: center;
        color: var(--color-white);

        h1 {
            margin-bottom: 1rem;
            text-transform: capitalize;
            font-weight: 500;
        }
    }

    .visually-hidden {
        position: absolute;
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0,0,0,0) !important;
        white-space: nowrap !important;
        border: 0 !important;
    }

    .instructions {
        font-size: var(--font-size-0_8);
        border-radius: .5rem;
        background: var(--color-black);
        color: var(--color-white);
        padding: .25rem;
        position: relative;
        bottom: -10px;
    }

    .offscreen {
        position: absolute;
        left: -9999px;
    }

    .hide {
    display: none;
    }

    .valid {
        color: var(--color-lime-green);
    }

    .invalid {
        color: var(--color-red);
    }

`;