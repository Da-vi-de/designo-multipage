import { QUERIES } from "../../../utils/mediaQueries";

export const CommonCard = `
margin-top: 4rem;

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
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
}

.card .card-info {
    background-color: var(--color-light-cream);
    padding: 2rem;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
}

.card-info {
    text-align: center;
}

h2 {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: .2rem;
    margin-bottom: .5rem;
    color: var(--color-peach);
}

p {
    color: var(--color-grey);
}

@media ${QUERIES.tabletMini} {
    .card {
        flex-direction: row;
    }

    .card-img {
        border-top-right-radius: unset;
        border-bottom-left-radius: .5rem;
    }

   .card .card-info {
        border-bottom-left-radius: unset;
        border-top-right-radius: .5rem;
        padding-top: 8rem;
    }
}

@media ${QUERIES.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    .card {
        flex-direction: column;
    }

    .card-img {
        border-top-right-radius: .5rem;
        border-bottom-left-radius: unset;
    }

    .card .card-info {
        border-bottom-left-radius: .5rem;
        border-top-right-radius: unset;
        padding: 4rem;
    }
}
`;