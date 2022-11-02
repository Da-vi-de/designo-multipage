import styled from "styled-components";
import { QUERIES } from "../../../utils/mediaQueries";
import threeCirclesBg from "../../../assets/shared/desktop/bg-pattern-three-circles.svg";

export const StyledLocationMap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  margin-top: 1.5rem;

  .leaflet-container {
    width: 100%;
    height: 20rem;
    z-index: 99;
  }

  .info {
    background-color: var(--color-light-cream);
    background-image: url(${threeCirclesBg});
    background-repeat: no-repeat;
    padding: 5rem;
    border-radius: .5rem;
    display: grid;
    align-items: center;
    gap: 1.5rem;
    text-align: center;


    h2 {
        font-size: var(--font-size-2);
        color: var(--color-peach);
        white-space: nowrap;
    }

    .title {
        font-weight: bold;
    }
  }

  @media ${QUERIES.tabletMini} {
    max-width: min(90%);
    margin: auto;
    margin-bottom: 4rem;
    gap: 2rem;
  }

  .leaflet-container {
    border-radius: .5rem;
  }

  .info {
    grid-template-columns: repeat(2, 1fr);
    justify-content: left;
    text-align: left;
  }

  .info-address-tab-desk-position {
    grid-column: 1/2;
  }

  .info-contact-tab-desk-position {
    grid-column: 2/2;
  }

  @media ${QUERIES.desktop} {
    flex-direction: row;

    &.image-first {
      .leaflet-container {
        order: 0;
      }
      .info {
        order: 1;
      }
    }

    .info {
      order: 1;
      width: 70%;
      background-position: 20% 105%;
    }

    .leaflet-container {
      order: 2;
      max-width: 30%;
      height: 20rem;
    }
  }
`;