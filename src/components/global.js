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
   color: ${({ theme: { styles } }) => styles.text};
   background: ${({ theme: { styles } }) => styles.body};
  font-weight: ${({ theme: { styles } }) => styles.weight};
  font-family: 'Roboto' sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  transition: color 0.2s ease-out, background 0.2s ease-out,
  }

  main{
    font-size: ${({ theme: { styles } }) => styles.size};
  }


  a{
    color: ${({ theme: { styles } }) => styles.linkText};
  }
  .to{
    color: ${({ theme: { styles } }) => styles.text};
    text-decoration: none;
  }

  .floatingInt{
    background-color: ${({ theme: { styles } }) => styles.floatingIntBG};
  }

  .artHeader{
    color: ${({ theme: { styles } }) => styles.artHeader};
  }

  .sideContent{
    background-color: ${({ theme: { styles } }) => styles.sideContent};
    border-right:0.1px solid rgba(59, 58, 58, 0.2);;
    @media (max-width: 500px) {
     width:0px;
     height: 0px;
     z-index:-1;
     opacity: 0;
    }
  }

  strong{
    background-color: ${({ theme: { styles } }) => styles.strong};
    font-weight: 500;
  }
`
