import styled from "styled-components";


const Container = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`

const Content = styled.article`
 position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  margin-top: 8rem;
  padding: 2.4rem 12rem 6.4rem 12rem ;
  transition: all 0.2s ease-in-out;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 0;
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

  @media (max-width: 960px) {
    padding: 2.4rem 4.4rem 6.4rem 4.4rem ;

  }

  @media (max-width: 768px) {
    gap: 8rem;
  }

  @media (max-width: 480px) {
    padding: 2.4rem 2.4rem 6.4rem 2.4rem ;
  }

  @media (max-width: 340px) {
    padding: 2.4rem 2.4rem 6.4rem 2.4rem ;

  }
`

export {
  Container,
  Content,
}
