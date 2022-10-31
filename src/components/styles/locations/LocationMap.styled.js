import styled from "styled-components";
import threeCirclesBg from "../../../assets/shared/desktop/bg-pattern-three-circles.svg"

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
    }

    .title {
        font-weight: bold;
    }
  }

`