// import styled component
import styled from "styled-components";

// button
export const Button = styled.button`
background-color: white;
border-radius: 50px;
`
// Wrapper
export const Wrapper = styled.section`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 10px 20px;

`

// Box 
export const Box = styled.div`
height: 100px;
width: 100px;
border: none;
border-radius: 100px;
background-color: ${(props) => props.bgColor === false ? "white" : "yellow"};
`