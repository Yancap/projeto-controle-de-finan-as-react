import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1126px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
        color: #fff;
    }
    button{
        font-size: 1rem;
        background: var(--blue-light);
        border: 0;
        color: #fff;
        font-size: 1rem;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;
        
        &:hover{
            /* propriedade importante! */
            filter: brightness(0.9);
        }
    }
`
    
