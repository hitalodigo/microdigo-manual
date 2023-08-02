import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 60px;
  right: ${({ orientation }) => orientation === 'right' ? 0 : 'auto'};
  left: ${({ orientation }) => orientation === 'left' ? 0 : 'auto'};
  width: fit-content;
  border: 1px solid var(--gray-50);
  border-radius: 4px;
  box-shadow: 0px 0px 12px 0px rgba(40, 40, 50, 0.40);
  background-color: var(--white);
  z-index: 10000;



  @media(max-width: 968px) {
    width: 100%;
    position: relative;
    top: auto;
    left: auto;
    margin: 0 auto;
    border: none;
    box-shadow: none;
    background-color: transparent;
  }

  @media(max-width: 480px) {
    left: ${({ orientation }) => orientation === 'left' ? '-60px' : 'auto'};

  }
`




