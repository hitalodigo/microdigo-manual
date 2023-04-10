import styled from "styled-components";


const Container = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`

const Content = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
  margin-top: 8rem;
  padding: 2.4rem 12rem 6.4rem 12rem ;
  overflow-y: auto;
  transition: all 0.2s ease-in-out;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--white);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--red);
    border-radius: 2px;
  }
`

export {
  Container,
  Content,
}