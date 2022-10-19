import styled from "styled-components";
import smallCircle from "../../../../assets/shared/desktop/bg-pattern-small-circle.svg";
import { QUERIES } from "../../../../utils/mediaQueries";

export const StyledCompanyCulture = styled.article`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .images {
        display: flex;
        justify-content: center;
        background-image: url(${smallCircle});
        background-repeat: no-repeat;
        background-position: 50% 55%;
    }

    .title, .text {
        color: var(--color-dark-grey);
        text-align: center;
    }

    .title {
        font-size: var(--font-size-1_5);
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: .2rem;
    }

    @media ${QUERIES.tabletMini} {
        align-items: flex-start;

        img {
            width: 45rem;
            height: 12.5rem;
            margin-right: .5rem;
            object-fit: contain;
        }

        .title-text-tablet-desk {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 1.5rem 1.5rem;
        }

        .content {
            display: flex;
            justify-content: space-between;
        }

        .title, .text {
            text-align: left;
        }

        .title {
            margin-bottom: .3rem;
        }
    }

    @media ${QUERIES.desktop} {
        flex-direction: row;

        .content {
            flex-direction: column;
        }

        .title-text-tablet-desk {
            align-items: center;
        }

        .title, .text {
            text-align: center;
        }

    }
`