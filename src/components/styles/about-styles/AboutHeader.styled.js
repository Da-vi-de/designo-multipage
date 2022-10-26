import styled from "styled-components";
import bgAboutHero from "../../../assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import { QUERIES } from "../../../utils/mediaQueries";

export const StyledAboutHeader = styled.header`
margin-top: 1rem;

.card {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

.card .card-img  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-img {
    max-height: 24rem;
    overflow: hidden;
}

.card .card-info {
    background-image: url(${bgAboutHero});
    background-position: 100% 27%;
    background-size: 270%;
    background-color: var(--color-peach);
    padding: 5rem 0;
}

.card-info {
    text-align: center;
    color: var(--color-white);
}

h1 {
    text-transform: capitalize;
    font-weight: 500;
    letter-spacing: .2rem;
    margin-bottom: .5rem;
}

@media ${QUERIES.tabletMini} {
    max-width: min(90%);
    margin: auto;

    .card-img {
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
    }

    .card-info {
        border-bottom-left-radius: .5rem;
        border-bottom-right-radius: .5rem;
    }

    .card .card-info {
        background-position: 120% 22%;
        padding: 5rem 4rem;
    }

    h1 {
        font-size: var(--font-size-3);
    }

    p {
        font-size: var(--font-size-1_25);
    }

    @media ${QUERIES.desktop} {
        .card {
            flex-direction: row-reverse;
        }

        .card-img {
           width: 50%;
           max-height: 28.5rem;
           border-top-left-radius: unset;
           border-bottom-right-radius: .5rem;
        }

        .card .card-info {
            width: 50%;
            background-position: 100% 12%;
        }

        .card-info {
            text-align: left;
            border-top-left-radius: .5rem;
            border-bottom-right-radius: unset;
        }
    }

    @media ${QUERIES.megaDesktop} {
        .card-img {
            max-height: 26.5rem;
        }
    }
}
`;