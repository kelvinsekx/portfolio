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

  .artHeader{
    color: ${({theme})=> theme.artHeader};
  }

  .sideContent{
    background-color: ${({theme})=> theme.sideContent};
    border-right:0.1px solid rgba(59, 58, 58, 0.2);;
    @media (max-width: 500px) {
     width:0px;
     height: 0px;
     z-index:-1;
     opacity: 0;
    }
  }
`