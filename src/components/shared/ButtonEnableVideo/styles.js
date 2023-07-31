import styled from "styled-components";

export const Container = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.4rem auto 0 auto;
    padding: 1.2rem 4.4rem;
    font-size: 1.8rem;
    font-weight: bold;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    color: var(--white);
    background-color: transparent;
    transition: filter 0.3s ease-in-out;

    &:hover{
        
        > div:first-child{
        
            background-color: var(--blue);
            
            svg{
                color: var(--white);
            }
        }
    }

`

export const Content = styled.div`
    
`

export const Icon = styled.div`
    position: absolute;
    left: -0.9rem;
    width: 8rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 99999px;
    background-color: var(--gray-50);
    z-index: 1;
    transition: background-color 0.3s ease-in-out;

    svg{
        width: 3.2rem;
        height: 3.2rem;
        color: var(--gray-100);
        transition: color 0.3s ease-in-out;
    }


`

export const TitleContainer = styled.div`
    padding: 0.8rem 3.2rem;
    font-size: 2rem;
    white-space: nowrap;
    border-radius: 0 4px 4px 0;
    background-color: var(--red);
`

export const SubtitleContainer = styled.div`
    max-width: 14rem;
    padding: 0.8rem 1.2rem 0.8rem 2.4rem;
    font-size: 1.4rem;
    border-radius: 0 4px 0 0;
    background-color: var(--black);
`