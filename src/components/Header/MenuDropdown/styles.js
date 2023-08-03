import styled from "styled-components";


export const TitleMenu = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  font-size: 1.6rem;
  font-weight: bold;
  white-space: nowrap;
  color: var(--white);

  &::after{
    content: '';
    position: absolute;
    bottom: 1.6rem;
    width: 0%;
    height: 0.2rem;
    border-radius: 8px;
    background-color: var(--yellow);
    transition: width 0.3s ease-in-out;
    z-index: 10;

  }
  &:hover::after{
    width: 100%;
  }

  @media (max-width: 968px) {
    font-size: 2rem;
    font-weight: bold;
    color: var(--black);
    background-color: var(--yellow);

    &::after{
      display: none;
    }

  }

`
