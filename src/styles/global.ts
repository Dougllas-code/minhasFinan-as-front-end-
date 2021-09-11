import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --verde_escuro: #078C41;
    --verde_medio: #04D94F;
    --verde_claro: #04BF45;

    --branco: #ffffff;
    --cinza_claro: #F2F2F2;
    --cinza_medio: #E1E1E1;

    --background_claro: #434343;
    --background_medio: #262626;
    --background_escuro: #131313;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%;
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(---background_medio);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`