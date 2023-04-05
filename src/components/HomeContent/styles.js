import styled from "styled-components";

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
const HomeHeader = styled.header``

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

const YouWillLearnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem 3.2rem;
  border-radius: 12px;
  color: var(--white);
  background-color: var(--blue);

  h2{
    font-size: 2.4rem;
  }

  ul{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    
    li{ 
        list-style: inside; 
    }
  }
`


export {
  HomeContainer,
  HomeSection,
  HomeHeader,
  YouWillLearnContainer
}