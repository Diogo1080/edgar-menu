import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  background-color: #333333;
  color: #ffffff;
  padding: 0;
}
body {
    font-family: Gotham,Arial,Helvetica Neue,Helvetica,sans-serif;
    font-weight: 300;
    font-size: 14px;
  }
  body.fontLoaded {
    font-family: Gotham,Arial,Helvetica Neue,Helvetica,sans-serif;
  }
  p,
  label {
    font-family: Gotham,Arial,Helvetica Neue,Helvetica,sans-serif;
    line-height: 1.5em;
  }

`;

export default GlobalStyle;