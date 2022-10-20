import styled from 'styled-components';
import { CommonHover } from '../../shared-styles/CommonHover.styled';

export const StyledMenu = styled.nav`
  display: flex;
  background: var(--color-black);
  width: 100%;
  height: 30vh;
  padding: 0  1rem;
  position: absolute;
  top: 7rem;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

  li, a {
    font-size: var(--font-size-1_5);
    text-transform: uppercase;
    font-weight: 500;
    padding: .5rem 0;
    letter-spacing: .3rem;
    color: var(--color-white);
    list-style: none;

    &:focus-visible {
      outline: 4px solid var(--color-white);
    }
  }
  ${CommonHover}
    .underline-hover-effect::before {
        background-color: var(--color-white);
  }
`;