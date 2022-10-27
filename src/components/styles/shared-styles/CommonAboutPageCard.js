import { QUERIES } from "../../../utils/mediaQueries";

export const CommonCard = `
.card {
    display: flex;
    flex-direction: column;
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
    padding: 5rem 0;
}

.card-info {
    text-align: center;
}

h1, h2 {
    font-weight: 500;
    letter-spacing: .2rem;
    margin-bottom: .5rem;
}

@media ${QUERIES.tabletMini} {
    max-width: min(90%);
    margin: auto;

    .card {
        margin-bottom: 5rem;
    }

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
        .card-img {
           width: 50%;
        }

        .card .card-info {
            width: 50%;
        }

        .card-info {
            text-align: left;
        }
    }

    @media ${QUERIES.megaDesktop} {
        .card-img {
            max-height: 26.5rem;
        }
    }
}
`;