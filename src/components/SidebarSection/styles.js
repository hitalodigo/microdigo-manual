import styled from "styled-components";

const SidebarContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

const SidebarHeader = styled.header``

const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8rem;
`

const SidebarExampleContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .components{
        position: absolute;
        top: 2rem;
        right: 6rem;
        width: 40rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    & .selected-component{
        position: absolute;
        bottom: 4rem;
        left: 14rem;
        width: 40rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }
`

const ButtonDescriptionContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;
`

const ButtonDescriptionItem = styled.div`
    position: relative;
    width: calc(90% / 2);
    padding: 3.2rem;
    height: 24rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
    background-color: var(--gray-50);

    & div{
        position: absolute ;
        padding: 0.6rem;
        
        background-color: var(--yellow);
    }

    &.entry{
        border-radius: 24px 0 0 0;
        justify-content: flex-start;
        & div{
            bottom: 0;
            right: 0;
            border-radius: 8px 0 0 0;
        }
    }

    &.exit{
        border-radius: 0 24px 0 0;
        justify-content: flex-start;
        & div{
            left: 0;
            bottom: 0;
            border-radius: 0 8px 0 0;
        }
    }

    &.conditional{
        border-radius: 0 0 0 24px;
        & div{
            right: 0;
            top: 0;
            border-radius: 0 0 0 8px;
        }
    }

    &.events{
        border-radius: 0 0 24px 0 ;
        & div{
            left: 0;
            top: 0;
            border-radius: 0 0 8px 0;
        }
    }
`


export {
    SidebarContainer,
    SidebarHeader,
    SidebarContent,
    SidebarExampleContainer,
    ButtonDescriptionContainer,
    ButtonDescriptionItem
}