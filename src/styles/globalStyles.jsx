import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.bg};
        
    };
    p {
        color: ${(props) => props.theme.p};
        
    };
    input {
        color: ${(props) => props.theme.p};
        background-color: ${(props) => props.theme.input};
        box-shadow:  1px 1px 1px ${(props) => props.theme.shadows};
        
        
        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${(props) => props.theme.span};
        } 
    }   
    span {
        color: ${(props) => props.theme.span};
        
    };
    h2 {
        color: ${(props) => props.theme.p};
        
    };
    h3 {
        color: ${(props) => props.theme.p};
        
    };
    button {
        color: ${(props) => props.theme.p};
        background-color: ${(props) => props.theme.input};
        box-shadow: 1px 1px 1px 1px ${(props) => props.theme.shadows};
        
    };
    i {
        background-color: ${(props) => props.theme.input};
        color: ${(props) => props.theme.p};
    }
`
export default GlobalStyle