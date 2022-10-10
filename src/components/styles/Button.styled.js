import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../../utils/mediaQueries";

export const ButtonLink = styled(Link)`
    width: 9.5rem;
    padding: .8rem 1.3rem;
    align-self: center;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    background-color: ${props => (props.secondary ? 'var(--color-peach)' : 'var(--color-white)')};
    color: ${props => (props.secondary ? 'var(--color-white)' : 'var(--color-black)')};

    &:hover {
      background-color: var(--color-light-peach);
      color: var(--color-white);
    }

    &:focus-visible {
    outline: 4px solid var(--color-black);
  }


  @media ${QUERIES.desktop} {
    margin-right: 20rem;
}
`;

