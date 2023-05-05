import styled from "styled-components";

export const Container = styled.div`
    margin-top: 3.5rem;
    div.settings{
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            width: 1.5rem;
            height: auto;
            transition: transform 0.5s;
            cursor: pointer;
        }
        path{
            fill: var(--text-title);
        }
        &:hover{
            svg{
               transform: rotate(180deg) scale(1.25); 
            }
            
        }
    }
    table{
        width: 100%;
        border-spacing: 0 .5rem;
        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            max-width: 20ch;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:first-child{
                color: var(--text-title);
            }
            &.deposit{
                color: var(--green);
            }
            &.withdraw{
                color: var(--red);
            }
        }
        td.config{
            background: var(--background);
            filter: brightness(0.95);
            position: relative;
            z-index: -1;
            opacity: 0;
            animation: openConfig .5s linear forwards;
            display: grid;
            padding: 0;
            grid-template-columns: repeat(2, 1fr);
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                svg{
                    transition: transform .25s;
                }
                &:hover{
                    svg{
                        transform: scale(1.2);
                    }
                }
            }
            div.delete{
                background: var(--red);
                padding: 1rem 1rem;
                path{
                    fill: var(--red);
                    filter: brightness(0.5);
                }
            }
            div.edit{
                background: var(--green);
                padding: 1rem 1rem;
                path{
                    fill: var(--green);
                    filter: brightness(0.5);
                }
            }
            
            @keyframes openConfig {
                from{
                    transform: translateX(-150px);
                    opacity: 0;
                    display: none;
                }
                to{
                    opacity: 1;
                    transform: translateX(0);
                    z-index: 0;
                }
            }
            @keyframes closeConfig {
                from{
                    opacity: 1;
                    transform: translateX(0);
                }
                to{
                    opacity: 0;
                    transform: translateX(-150px);
                    z-index: -1;
                }
            }
        }
        @media screen and (max-width: 768px) {
            th,td{
                padding: .5rem 1rem;
            }
            svg{
                width: 1rem;
            }
        }
        @media screen and (max-width: 600px) {
            th,td{
                padding: 1rem .5rem;
            }
        }
        @media screen and (max-width: 575px) {
            th.settings{
                display: none;
            }
            td.config{
                display: none;
            }
            tbody tr{
                /* Fazer um Modal para cada linha da tabela */
            }
        }
    }
`