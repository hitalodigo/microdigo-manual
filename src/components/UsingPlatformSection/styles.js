import styled from "styled-components";

const UsingPlatformContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4.4rem;

`

const UsingPlatformContent = styled.section`

    @media (max-width: 960px) {
        ol{
            padding-left: 2rem;
        }
    }

`

const UsingPlatformHeader = styled.header`

    @media (max-width:620px) {
        h1{
            font-size: 3.2rem;
        }
    }

    @media (max-width:340px) {
        h1{
            font-size: 2.4rem;
        }
    }
`

const AddComponentsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;

    @media (max-width: 1260px) {
        gap: 6.4rem;
    }
`

const AddComponentsCard = styled.div`
    width: calc(90% / 2);
    display: flex;
    gap: 2.4rem;

    & p{
        max-width: 24rem;
        text-align: ${({ textAlign }) => textAlign ? `${textAlign}` : 'initial'};
        
        & span{
            display: block;
            font-size: 2rem;
            font-weight: bold;
            color: var(--red);
        }
    }

    @media (max-width: 1260px) {
        width:100%;
    }

    @media (max-width: 620px) {
        flex-direction:column;

        & + div{
            flex-direction: column-reverse;
        }

        & p{
            max-width: max-content;
            text-align: start;

            & span{
                text-align:center;
            }
        }

        & .container-img{
            width: 100%;
            height: 100%;
        }
    }
`

const CreateConnectionListCard = styled.div`
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

const CreateConnectionCard = styled.div`
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

const DeleteComponentListCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (max-width: 1268px) {
        justify-content: center;
        gap: 4.4rem;
    }
`

const DeleteComponentCard = styled.div`
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

const CreateFlowContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 6.4rem;

    @media (max-width: 1268px) {
        flex-direction: column;

        & .container-img{
            width: 100%;
            height: 100%;
        }
    }

`

const SequencyNumber = styled.span`
    width: 100%;
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
    color: var(--red);
`

const MovementFlowContainer = styled.div`
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

const MovementFlowListCards = styled.div`
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;

`

const MovementFlowCard = styled.div`
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

export {
    UsingPlatformContainer,
    UsingPlatformContent,
    UsingPlatformHeader,
    AddComponentsContainer,
    AddComponentsCard,
    CreateConnectionListCard,
    CreateConnectionCard,
    DeleteComponentListCard,
    DeleteComponentCard,
    CreateFlowContainer,
    SequencyNumber,
    MovementFlowContainer,
    MovementFlowListCards,
    MovementFlowCard
}