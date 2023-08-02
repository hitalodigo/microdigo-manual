import styled from "styled-components";

export const ItemAncor = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
  white-space: nowrap;
  color: var(--blue-900);



  @media (max-width: 968px) {
    font-size: 1.6rem;
    font-weight: normal;
    display: flex;
    justify-content: center;
    padding: 2.4rem 0;
  }
`
