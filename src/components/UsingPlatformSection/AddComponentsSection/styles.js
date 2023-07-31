import styled from "styled-components"

export const AddComponentsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;

    @media (max-width: 1260px) {
        gap: 6.4rem;
    }
`

export const AddComponentsCard = styled.div`
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
