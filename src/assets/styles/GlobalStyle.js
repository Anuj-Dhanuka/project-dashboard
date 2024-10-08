import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
  }

  h2 {
    color: #2d3436;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    margin-bottom: 20px;
  }

  th, td {
    padding: 10px;
    text-align: left;
  }
`;

export default GlobalStyle;
