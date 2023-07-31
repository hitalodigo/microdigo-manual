import styled from "styled-components"

export const DeleteComponentListCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (max-width: 1268px) {
        justify-content: center;
        gap: 4.4rem;
    }
`

export const DeleteComponentCard = styled.div`
    position: relative;
    width: 24rem;
    height: 42rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
    padding: 3.2rem;
    border-radius: 48px;
    color: var(--white);
    background-color: var(--red);

    & p{
        position: relative;
        text-align: center;

        & span{
            position: absolute;
            top: -2.4rem;
            left: -1.2rem;
            display: block;
            margin-bottom: 1.2rem;
            font-size: 2.4rem;
            font-weight: bold;

        }
    }
`
