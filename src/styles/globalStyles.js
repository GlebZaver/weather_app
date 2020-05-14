import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };
  
  html, 
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Lato';
  };

  #root {
    height: 100%;
  };
`;
