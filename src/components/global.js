import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    outline: none;
  }


  body {
    margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: ${({ theme }) => theme.text};
   background: ${({ theme }) => theme.body};
  font-weight: ${({ theme }) => theme.weight};
  font-family: 'Roboto' sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  transition: color 0.2s ease-out, background 0.2s ease-out,
  }

  main{
    font-size: ${({ theme }) => theme.size};
  }


  a{
    color: ${({ theme }) => theme.linkText};
  }
  .to{
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  .floatingInt{
    background-color: ${({theme})=> theme.floatingIntBG};
  }
`