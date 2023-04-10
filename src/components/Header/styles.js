import styled from "styled-components";


const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 4.4rem;
    height: 8rem;
    padding: 0 4.4rem;
    background-color: var(--blue);
`


const LogoContainer = styled.div`
  width: 15rem;
  height: 6rem;
  
  img{
    width: 100%;
    height: 100%;
  }
`

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  height: 100%;

  @media (max-width: 968px) {
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: ${(props) => props.isActive ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    gap: 0;
    z-index: 10;
    
    background-color: rgb(40, 40, 50, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`

const MenuItem = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ linkActive }) => linkActive ? 'var(--blue)' : 'transparent'};
  transition: background-color 0.2s ease-in;

  a{
    display: flex;
    font-size: 1.6rem;
    white-space: nowrap;
    color: var(--white);
  }

  &::after{
    content: '';
    position: absolute;
    bottom: -0.4rem;
    width: 0%;
    height: 0.2rem;
    border-radius: 8px;
    background-color: var(--yellow);
    transition: width 0.3s ease-in-out;
  }
  &:hover::after{
    width: 100%;
  }

  @media (max-width: 968px) {
    padding: 2.4rem 0;

    &::after{
      display: none;
    }

    &:hover{
      background-color: var(--blue);
    }
  }
`

const MenuIcon = styled.div`
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
    transition: transform 0.5s ease-in-out;
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

`

export {
  HeaderContainer,
  LogoContainer,
  MenuList,
  MenuItem,
  MenuIcon
}