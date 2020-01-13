import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,  "Segoe UI", "Roboto", "Oxygen",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    width: 50%;
    margin: 10rem auto;
    box-sizing: border-box;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    .circle-background,
    .circle-progress {
      fill: none;
    }
    .circle-progress {
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: ease 3s 0.5s;
    }
  }
`;

export default GlobalStyle;
