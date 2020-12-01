import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }`;

export default GlobalStyle;
