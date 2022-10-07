import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
    padding: .8rem 1.3rem;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${props => (props.secondary ? 'var(--color-peach)' : 'var(--color-white)')};
    color: ${props => (props.secondary ? 'var(--color-white)' : 'var(--color-black)')};

    &:hover {
      background-color: var(--color-light-peach);
      color: var(--color-white);
    }

    &:focus-visible {
    outline: 2px solid var(--color-black);
  }

`;

