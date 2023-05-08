import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5 ;
        --red:#e52e40;
        --blue:#5429cc;
        --green:#33cc95;
        --blue-light:#6933ff;
        --text-title:#363f5f;
        --text-body:#969cb3;
        --shape:#ffffff;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        /* Configuração IMPORTANTE!!! */
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 1080px) {
          font-size: 87.5%;  
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing:antialiased;
        overflow-x: hidden;
        
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;   
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    #root{
        min-height: 100%;
        position: relative;
    }
    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 4rem;
        position: relative;
        border-radius: 0.25rem;
        @media screen and (max-width: 360px){
            padding: 2rem;
        }
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: none;
        background-color: transparent;
        transition: filter 0.5s ;
        &:hover{
            filter: brightness(0.6);
        }
    }
`