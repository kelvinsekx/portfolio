import styled from "styled-components"

export const Smalled = styled.div`
  font-size: 1rem;
  margin: 4rem 0;
`

export const NAV = styled.nav`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2em;
  list-style: none,
`
export const FooterDiv = styled.a`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`
export const MediaQueryBtn = styled.button`
display: none;
fontSize: 2rem;
@media (max-width: 500px) {
    display:block;
    position:fixed;
    background-color: ${({theme})=> theme.x_btn};
    color:${({theme})=> theme.x_clr};
    right: 10px;
    bottom:60px;
    width:5rem;
    height:5rem;
    border: 2px solid #444444;
    border-radius: 50%;
    z-index:3;
   }
`

export const Spanner1 = styled.div`
font-weight:800;
font-size: 1.5rem;
transform: ${({st})=> st ? "translate(6px,17px)" : "translateX(2px) rotate(0.25turn)"};
`
export const Spanner2 = styled.div`
font-weight:800;
font-size: 1.5rem;
transform: ${({st})=> st ? "translate(-3px,-17px)" : "translateX(2px) rotate(0.25turn)"};
`