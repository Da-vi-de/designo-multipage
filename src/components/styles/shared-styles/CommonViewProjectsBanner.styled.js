import { QUERIES } from "../../../utils/mediaQueries"

export const CommonViewProjectsBanner =`
margin-top: 2rem;

.container {
    padding: 5rem 0;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: .5rem;

    &:hover {
        filter: sepia(50%);
     }
}

.text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.link-position {
    display: flex;
}

h3, a {
    text-transform: uppercase;
    color: var(--color-white);
    white-space: nowrap;
    letter-spacing: .1rem;
}

h3 {
    font-size: var(--font-size-1_5);
}

a {
    font-size: var(--font-size-1_25);

    &:focus-visible {
        outline: 4px solid var(--color-peach);
    }
}

.arrow-img {
   margin-left: 1rem;
   object-fit: contain;
}

@media ${QUERIES.desktop} {
    margin-top: 0;

    h3 {
        font-size: var(--font-size-2);
    }

    a {
        font-size: var(--font-size-1_5);
        margin-top: .7rem;
     }

     .arrow-img {
        margin-top: .7rem;
     }
  }
`