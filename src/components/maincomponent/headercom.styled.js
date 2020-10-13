import styled from "styled-components"

export const HeadContainer = styled.div`
display: flex;
    align-items: center;
    justify-items: center;
    margin: 2.2em auto;
    @media screen and (max-width:600px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`