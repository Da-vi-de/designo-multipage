import styled from "styled-components";
import { QUERIES } from "../../../../utils/mediaQueries";
import { CommonHover } from "../../shared-styles/CommonHover.styled";

export const StyledFooterContent = styled.div`
    li, a {
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: .1rem;
        list-style: none;
        margin-bottom: .6rem;
        margin-right: .8rem;
        color: var(--color-light-grey);

        &:focus-visible {
            outline: 4px solid var(--color-white);
        }
    }
    ${CommonHover}
        .underline-hover-effect::before {
            background-color: var(--color-white);
    }

    hr {
        width: 90%;
        background: transparent;
        border: none;
        border-bottom: 1px solid var(--color-dark-grey);
    }

    .company-info-container {
        margin-top: 1rem;
        color: var(--color-light-grey);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 1.8;
        gap: 2.5rem;
    }

    .company-contact {
        margin-bottom: 2rem;
    }

    .info-intro {
        text-transform: capitalize;
        font-weight: bold;
    }

    .social-icons {
        display: flex;
        flex-direction: row;
        margin-bottom: 4rem;
    }

    .icon-img {
        margin-right: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;

        &:hover {
            background-color: var(--color-light-peach);
        }
    }

    @media ${QUERIES.tabletMini} {
        width: 100%;

        .links {
            display:inline-flex;
            float: right;
            transform: translateY(-85%);
        }

        .company-info-container {
            margin-top: 4rem;
            margin-left: 2rem;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            text-align: left;
        }

        .social-icons {
            float: right;
            transform: translateY(-220%);
        }
    }

    @media ${QUERIES.megaDesktop} {
        .links,
        .social-icons {
            margin-right: 3rem;
        }

        .company-info-container {
            margin-left: 4.3rem;
            gap: 15rem;
        }
    }
`