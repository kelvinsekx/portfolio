import styled, { css } from "styled-components"


export const OverallWrapperContainer = styled.div`
 width: 1100px;
 border: 2px solid black;
 margin: 0 auto;
`
export const ContentContainer = styled.div`
  border: 2px solid purple;
  // float: left;
`
export const WrapperContainer = styled.div`
  margin: 0.5em auto;
  line-spacing: 3px;
  border: 2px solid red;
  // float: right;
  @media (max-width: 720px) {
    width: 90vw;
  }
`

export const StyledLogo = styled.span`
  font-size: 2rem;
  font-weight: 450;
  @media (max-width: 720px) {
    font-size: 1.5rem;
  }

  ${props =>
    props.theme === "dark" &&
    css`
      color: #fff;
      text-shadow: 0 0 0.033em #fff, 0 0 0.08em #fff,
        0 0 0.1em ${props => props.color.name},
        0 0 0.2em ${props => props.color.name},
        0 0 0.3em ${props => props.color.name},
        0 0 1em ${props => props.color.name},
        0 0 1.5em ${props => props.color.name};
    `}
  ${props =>
    props.theme === "light" &&
    css`
      color: rgb(255, 167, 196);
    `}
`

export const StyledLink = styled.div`
  color: inherit;
  width: 60vw;
  margin-top: 2rem;
  @media (max-width: 768px) {
    width: 80vw;
  }
`

export const StyledH3 = styled.h3`
  font-size: ${({ftSize})=>ftSize};
  font-weight: 700;
  font-family: "DM Mono", monospace;
  min-height: 2rem;
`

export const StyledParagraph = styled.p`
  font-size: 1.1em;
  font-weight: 50;
`

export const StyledSmall = styled.small`
  margin-top: 1.2em;
  font-size: ${({ftSize})=> ftSize}
`



