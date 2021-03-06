/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    line-height: 1.15;
  }

  html, body {
    @import url('//fonts.googleapis.com/css?family=Dosis');
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-family: 'Dosis', sans-serif;
    font-size: 16px;
    color: #8760ff;
    background-color: #F8F9FF;
  }

  ol, ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  table {
    border-collapse: collapse;
  }
`;
