import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    text-decoration: none;
  }

  a{
    color: #52b6ff;

    &:visited{
      color: #52b6ff;
    }
  }

  body{
    font-family: 'Roboto', sans-serif;
    margin: 30px 100px;
  }

  .root{
    height: 100%;
  }
`;
