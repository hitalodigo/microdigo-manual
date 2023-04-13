import styled from "styled-components";

const UsingPlatformContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`

const UsingPlatformContent = styled.section``

const UsingPlatformHeader = styled.header``

const AddComponentsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;
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
`

const CreateConnectionListCard = styled.div`
    width: 100%;
    height: 44rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
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
`

const DeleteComponentListCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

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
    flex-wrap: wrap;
    gap: 6.4rem;

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
    MovementFlowContainer
}