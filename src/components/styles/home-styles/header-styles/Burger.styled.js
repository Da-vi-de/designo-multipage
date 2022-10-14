import styled from 'styled-components';
import { QUERIES } from '../../../../utils/mediaQueries';

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus-visible {
    outline: 4px solid var(--color-black);
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: var(--color-black);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media ${QUERIES.tabletMini} {
    display: none;
  }
`;