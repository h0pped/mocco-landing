import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    body{
        font-family: "Poppins",sans-serif;
        background: #1E1E1E;
    }
    h1{
        font-weight: lighter;
        font-size: 2.7rem;
    }
    a{
        text-decoration:none;
        color:#c8a259;
    }
    span{
        color:#c8a259
    }
`;
export default GlobalStyle;
