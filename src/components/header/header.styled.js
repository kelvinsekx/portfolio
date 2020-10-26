import styled from "styled-components"

export const Head = styled.header`
padding: 0.2rem 0.04rem;
display: flex;
align-items: center;
justify-content: space-around;
background-color: ${({theme})=>theme === 'light' ? '#fff' : '#20232a'};
position: fixed;
z-index: 1;
width: 100%;
top: 0;
left: 0;
border-bottom: 3px solid ${({theme})=> theme === 'light' ? '#f4f4f4' : '#222'};
`