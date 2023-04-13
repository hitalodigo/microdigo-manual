import styled from "styled-components";

const MoutingPanelContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

const MoutingPanelHeader = styled.header``;

const MoutingPanelContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
`;

const MoutingPanelListCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6.4rem;
`

const MoutingPanelCard = styled.div`
    width: 100%;
    height: 36rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

`

const ZoomContainer = styled.div`
    display: flex;
`

export {
    MoutingPanelContainer,
    MoutingPanelHeader,
    MoutingPanelContent,
    MoutingPanelListCard,
    MoutingPanelCard
}