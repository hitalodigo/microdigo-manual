
import styled from "styled-components";


export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 4.4rem;
    height: 6rem;
    padding: 0 4.4rem;
    background-color: var(--blue);
    z-index: 1;

`


export const LogoContainer = styled.div`
  width: 12rem;
  height: 6rem;

  img{
    width: 100%;
    height: 100%;
  }

`

export const MenuList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  height: 100%;

  @media (max-width: 968px) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: ${(props) => props.isActive ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
    padding: 3.2rem 0;
    background-color: rgb(40, 40, 50, 0.5);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 10;
    overflow: auto;
  }
`

export const MenuItem = styled.li`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ linkActive }) => linkActive ? 'var(--blue)' : 'transparent'};
  transition: background-color 0.2s ease-in;
  z-index: 10;


  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

  }
`

export const MenuLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
    &::after{
      display: none;
    }

  }

`

export const MenuIcon = styled.div`
  display: none;
  position: relative;
  width: 4rem;
  height: 0.5rem;
  margin: 0 0 0 auto;
  border-radius: 8px;
  cursor: pointer;
  background-color: var(--white);

  &::before,
  &::after{
    content: '';
    position: absolute;
    left: 0;
    width: 4rem;
    height: 0.5rem;
    border-radius: 8px;
    background-color: var(--white);
    transition: all 0.5s ease-in-out;
  }

  &::before{
    top: -1rem;
  }

  &::after{
    top: 1rem;
  }

  &.isActive{
    z-index: 11;
    background-color: transparent;
  }

  &.isActive::before{
    transform: translate(0%, 180%) rotate(-315deg);
  }

  &.isActive::after{
    transform: translate(0%, -225%) rotate(315deg);
  }

  @media (max-width: 968px){
    display: block;
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 0.3rem;

    &::before,
    &::after{
      width: 3rem;
      height: 0.3rem;
    }

    &::before{
      top: -0.8rem;
    }

    &::after{
      top:0.8rem;
    }

    &.isActive::before{
      transform: translate(0%, 200%) rotate(-315deg);
    }

    &.isActive::after{
      transform: translate(0%, -345%) rotate(315deg);
    }
  }

`
