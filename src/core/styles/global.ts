import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #151515
  }
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    font-weight: normal;
    line-height: 22px;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    font-family: 'Montserrat SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
  }

  [disabled] {
    cursor: not-allowed;
  }
  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

  }
  ::-webkit-scrollbar { 
    display: none;
  }
  
`;
