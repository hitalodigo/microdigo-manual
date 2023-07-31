import styled from "styled-components"

export const MovementFlowContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4.4rem;

    @media (max-width: 1268px) {
        & > div:first-child{
            width: 100%;
        }
    }
`

export const MovementFlowListCards = styled.div`
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;

`

export const MovementFlowCard = styled.div`
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

    @media (max-width: 620px) {
        width: 100%;

        & .container-img{
            /* width: 100%;
            height: 100%; */
        }
    }
`