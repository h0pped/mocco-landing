import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    body{
        font-family: "Poppins",sans-serif;

    }
    h1{
        font-weight: lighter;
        font-size: 2.7rem;
    }
`;
export default GlobalStyle;
