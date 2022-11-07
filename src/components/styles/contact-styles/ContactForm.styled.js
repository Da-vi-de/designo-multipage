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

    form {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: .3rem;
    }

    input,
    textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
        width: 100%;
        padding: 0;
        margin: 0;
        border: 1px solid var(--color-dark-grey);
        background-color: var(--color-white);
        border-radius: .25rem;

        &:focus-visible {
            outline: 2px solid var(--color-black);
        }
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"], textarea {
        display: block;
        padding: .5rem .75rem;
    }

    label {
        span {
            font-size: var(--font-size-1_25);

        }
    }

    .instructions {
        font-size: var(--font-size-0_8);
        border-radius: .5rem;
        background: var(--color-black);
        color: var(--color-white);
        padding: .25rem;
        position: relative;
        bottom: -5px;
    }

    .instructions > svg {
    margin-right: 0.25rem;
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
       margin-left: 0.25rem;

    }

    .invalid {
        color: var(--color-red);
        margin-left: 0.25rem;
        ;
    }
`;