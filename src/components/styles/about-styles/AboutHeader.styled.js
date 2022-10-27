import styled from "styled-components";
import { QUERIES } from "../../../utils/mediaQueries";

import bgAboutHero from "../../../assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import { CommonCard } from "../shared-styles/CommonAboutPageCard";

export const StyledAboutHeader = styled.header`
    ${CommonCard}
    margin-top: 1rem;

    .card .card-info {
        background-image: url(${bgAboutHero});
        background-position: 100% 27%;
        background-size: 270%;
        background-color: var(--color-peach);
    }

    .card-info {
        color: var(--color-white);
    }

    h1 {
        text-transform: capitalize;
    }

    @media ${QUERIES.desktop} {
        .card {
            flex-direction: row-reverse;
        }

        .card-img {
            max-height: 28.5rem;
            border-top-left-radius: unset;
            border-bottom-right-radius: .5rem;
        }

        .card .card-info {
            background-position: 100% 12%;
        }

        .card-info {
            border-top-left-radius: .5rem;
            border-bottom-right-radius: unset;
        }
    }
`;