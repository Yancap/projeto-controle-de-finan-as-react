import styled from "styled-components";

export const Container = styled.section`
    width: 440px;
    height: 500px;
    background: var(--shape);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    h1{
        font-size: 2.5rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-self: flex-start;
    width: 100%;
    height: 70%;
    div{
        display: flex;
        flex-direction: column;
        width: 100%;
        label{
            font-size: 1.25rem;
            color: var(--text-title);
        }
        input{
            height: 2rem;
            padding-left: 6px;
            border-width: 0px 1.5px 1.5px 0px;
            border-style: solid;
            border-color: #000000;
            border-radius: 2px;
        }
    }
    a{
        font-weight: 700;
        font-size: 0.85rem;
        transition: text-decoration .25s;
        color: var(--blue);
        &:hover{
            text-decoration: underline;
        }
    }
    button{
        align-self: flex-start;
        padding: 0.35rem 1.25rem;
        background: var(--blue-light);
        border: none;
        color: #fff;
        border-radius: 2px;
        font-size: 1rem;
        transition: background 0.25s;
        &:hover{
            background: var(--blue);
        }
    }
`