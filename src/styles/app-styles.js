import styled from "styled-components";


const Container = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
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




export {
  Container,
  Content,
  Sidebar,
}