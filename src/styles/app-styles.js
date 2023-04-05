import styled from "styled-components";


const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const Content = styled.div`
  width: 100%;
  padding: 2.4rem 6.4rem;
  overflow-y: auto;
  transition: all 0.2s ease-in-out;
`

const Sidebar = styled.nav`
  width: 24rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 4.4rem 0;
  padding: 4.4rem 0 ;
  list-style: none;
  color: var(--white);
  background-color: var(--black);
`

const LogoContainer = styled.div`
  width: 8rem;
  height: 8rem;
  margin: 0 auto;
  border-radius: 100%;
  box-shadow: 0px 0px 10px var(--white);
  background: var(--white);
  
  img{
    width: 100%;
    height: 100%;
  }
`

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const MenuItem = styled.li`
  width: 100%;
  padding: 0.8rem 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ linkActive }) => linkActive ? 'var(--blue)' : 'transparent'};
  transition: background-color 0.2s ease-in;

  &:hover{
    background-color: var(--blue);
  }
`

export {
  Container,
  Content,
  Sidebar,
  LogoContainer,
  MenuList,
  MenuItem
}