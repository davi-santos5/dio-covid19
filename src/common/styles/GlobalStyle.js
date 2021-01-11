import { createGlobalStyle } from 'styled-components';

import CovidImg from '../../assets/images/covid.jpg';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
        outline: none;
    }

    body {
        line-height: normal;
    }

    html, body {
        width: 100vw;
        min-height: 100vh;
        display: flex;
    }

    #root {
        background: url(${CovidImg});
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center center;
    }

    .mb-2 {
        margin-bottom: 16px;
    }

    .pt-2 {
        padding-top: 16px;
    }

    .cursor {
        cursor: pointer;
    }

`

export default GlobalStyle;