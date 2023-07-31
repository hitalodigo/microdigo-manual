import styled from "styled-components";

const UsingPlatformContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4.4rem;

`

const UsingPlatformContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8rem;

    @media (max-width: 960px) {
        ol{
            padding-left: 2rem;
        }
    }

`

export {
    UsingPlatformContainer,
    UsingPlatformContent,
}