import styled from "styled-components";

export const ItemContainer = styled.li`
  width: 100%;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  list-style: none;

  :nth-child(odd){
    background-color: rgba(0, 120, 255, 0.3);
  }

  &:hover{
    background-color: var(--blue);
    a{
      color: var(--white);
    }
  }

  @media (max-width: 968px) {
    padding: 0 0;

    a{
      color: var(--white);
    }

    :nth-child(odd){
      background-color: transparent;
    }

    &:hover{
      background-color: var(--transparent);

    }
  }
`
