import styled from "styled-components";

export const CreateFlowContainer = styled.div`
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
