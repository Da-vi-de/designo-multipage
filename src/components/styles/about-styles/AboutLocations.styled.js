import styled from "styled-components";
import { QUERIES } from "../../../utils/mediaQueries";

import smallCircle from "../../../assets/shared/desktop/bg-pattern-small-circle.svg";

export const StyledAboutLocations = styled.div`
    margin: 7rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    .images {
            display: flex;
            justify-content: center;
            background-image: url(${smallCircle});
            background-repeat: no-repeat;
            background-position: 50% 55%;
        }

    .title {
        margin: 1rem 0;
        font-size: var(--font-size-1_5);
        text-transform: uppercase;
        color: var(--color-dark-grey);
        text-align: center;
        font-weight: 400;
        letter-spacing: .2rem;
    }

    .btn-position {
        margin-left: 1.8rem;
        margin-top: 3rem;
    }

    .uk-btn {
        margin-left: 1.2rem;
    }

    @media ${QUERIES.desktop} {
        flex-direction: row;
    }

    @media ${QUERIES.megaDesktop} {
        .content-desktop {
            margin-right: 5rem;
        }
    }
`;