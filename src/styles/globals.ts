import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

  }

  body, html {
    background-color: ${props => props.theme["white"]};
    box-sizing: border-box;

    margin: 0 ;

  }

  body, html, p, textarea, button, input {
    font-size: 1rem;
    font-family: 'Roboto';

    border: 0;

  }

`;
