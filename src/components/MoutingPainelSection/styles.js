import styled from "styled-components";

const MoutingPanelContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

const MoutingPanelHeader = styled.header`
    @media (max-width: 620px) {
        h1{
            font-size: 3.2rem;
        }
    }

    @media (max-width: 340px) {
        h1{
            font-size: 2.4rem;
        }
    }
`;

const MoutingPanelContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 6.4rem;

    @media (max-width:620px) {
        
        ol{
            padding-left: 2rem;

        }
    }
`;

const MoutingPanelListCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6.4rem;

    @media (max-width: 960px) {
        flex-wrap: wrap;
        gap: 6.4rem;
    }

    @media (max-width: 620px){
        gap: 2.4rem;
    }

`

const MoutingPanelCard = styled.div`
    width: 100%;
    height: 36rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;

    @media (max-width: 960px) {
        height: 44rem;
    }

    @media (max-width: 960px) {
        height:38rem;
    }
`

const ZoomContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width:960px) {
        flex-direction: column;
        gap: 4.4rem;

        & .container-img{
            width: 100%;
            height: 100%;
        }
    }
`

const MovimentationContainer = styled.div`
    display: flex;
    gap: 4.4rem;

    @media (max-width: 620px){
        flex-direction: column;

        & .container-img{
            width: 100%;
            height: 100%;
        }
    }
`

export {
    MoutingPanelContainer,
    MoutingPanelHeader,
    MoutingPanelContent,
    MoutingPanelListCard,
    MoutingPanelCard,
    ZoomContainer,
    MovimentationContainer
}