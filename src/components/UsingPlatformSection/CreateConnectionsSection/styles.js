import styled from "styled-components"

export const CreateConnectionListCard = styled.div`
    width: 100%;
    height: 44rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1268px) {
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.4rem;
    }
`

export const CreateConnectionCard = styled.div`
    width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    & p{
        text-align: center;

        & span{
            display: block;
            margin-bottom: 1.2rem;
            font-size: 2rem;
            font-weight: bold;
            color: var(--red);
        }
    }

    &:nth-child(1){
        align-self: flex-start;
    }

    &:nth-child(3){
        align-self: flex-end;
    }

    @media (max-width: 1268px) {
        width: 100%;
        
        &:nth-child(1){
            align-self: center;
        }

        &:nth-child(3){
            align-self: center
        }

        & .container-img{
            width: 100%;
            height: 100%;
        }
    }
`