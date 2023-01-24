import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        color: #FBFBFB;
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background: #2828e6;

        text-rendering: OptimizeLegibility;
        -webkit-font-smoothing: anitlalised;


        font-family: 'Noto Sans', sans-serif;
        font-weight: 500;
    }
`