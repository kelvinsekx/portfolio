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
  font-family: 'Roboto', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }


  .to{
    color: ${({ theme }) => theme.text};
  }

  .link{
    color: ${({ theme }) => theme.linkText};
  }
`