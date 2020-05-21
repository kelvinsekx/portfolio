import styled from "styled-components"

export const WrapperContainer = styled.div`
  width: 70vw;
  margin: 0.5em auto;
  font-size: 1.2rem;
  line-spacing:5px;
  @media (max-width: 720px) {
    width: 90vw;
  }
`


export const StyledLink = styled.div`
 color: inherit;
 width:60vw;
  margin-top:2rem;
  @media (max-width: 768px) {
    width:80vw;
  }
`

export const StyledH3 = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'DM Mono', monospace;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const StyledParagraph=styled.p`
  font-size: 1.1em;
  font-weight: 50;
`
export const StyledSmall=styled.small`
 margin-top: 1.2em;
`

export const FooterDiv = styled.a`
 margin-top: 2rem;
 display:flex;
 justify-content: flex-end;
`

export const Smalled = styled.small`
 font-size:1rem;
 color: #555555;
`

export const NAV = styled.nav`
 display: flex;
 display: -webkit-box;
 display: -webkit-flex;
 justify-content: space-between;
 width: 100%;
 margin-top:2em;
`