import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, &:before, &:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Ubuntu", sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Space Grotesk", sans-serif;
  }


  body {
  background: #121216;
  }
`;
