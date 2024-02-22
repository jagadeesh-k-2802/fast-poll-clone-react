import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%; // 1rem = 10px
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::selection {
    background: #dbdeea;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  p {
    font-size: 1.6rem;
    color: #A6A9AE;
    line-height: 1.2;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #FAFAFA;
    color: #2D2D2D;
    font-family: 'Inter', sans-serif;
    line-height: 1;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
    transition: background-color 0.5s ease;
    overflow-x: hidden;
  }

  img {
	  width: 100%;
	  height: auto;
  }
`;

export default GlobalStyles;
