import styled from "styled-components";
import { QUERIES } from "../../../utils/mediaQueries";

import threeCirclesBg from "../../../assets/shared/desktop/bg-pattern-three-circles.svg";
import { CommonCard } from "../shared-styles/CommonAboutPageCard";

export const StyledAboutCardInfoTwo = styled.section`
    ${CommonCard}

    .card .card-info {
        background-image: url(${threeCirclesBg});
        background-color: var(--color-light-cream);
    }

    h2 {
        font-size: var(--font-size-2);
        color: var(--color-peach);
    }

    p {
        padding: 1rem .5rem;
    }

    @media ${QUERIES.tabletMini} {
        h2 {
            font-size: var(--font-size-2_5);
        }
    }

    @media ${QUERIES.desktop} {
        .card {
            flex-direction: row-reverse;
        }

        .card-img {
            max-height: 42rem;
            border-top-left-radius: unset;
            border-bottom-left-radius: unset;
            border-bottom-right-radius: .5rem;
        }

        .card-info {
            border-top-left-radius: .5rem;
            border-top-right-radius: unset;
            border-bottom-right-radius: unset;
        }
    }
`;