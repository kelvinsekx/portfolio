import styled from "styled-components"

export const Head = styled.header`
  padding: 0.8rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, plain }) => {
    return plain ? "transparent" : theme === "light" ? "#fff" : "#111"
  }};
  position: fixed;
  z-index: 50;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: ${({ theme, plain }) =>
    plain ? "" : theme === "light" ? "3px solid #f4f4f4" : "3px solid #222"};
`
