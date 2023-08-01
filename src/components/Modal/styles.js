import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 16px rgba(40, 40, 50, 0.5);
  background-color: var(--white);


  @media (max-width: 768px) {
    max-height: 480px;
  }

  @media (max-width: 480px) {
    max-height: 400px;
  }
`

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: var(--blue);

  img{
    height: 24px;
  }

  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--blue-900);
  }
`

export const BtnClose = styled.button`
  margin-left: auto;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  color: var(--white);
  transition: color 0.3s ease-in-out;

  &:hover{
    color: var(--red);
  }
`
