import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    body{
        font-family: "Poppins",sans-serif;
        background: black;
        
    }
    h1{
        font-weight: lighter;
        font-size: 2.7rem;
    }
    a{
        text-decoration:none;
        color:#c8a259;
        transition:0.5s ease;
        &:hover{
        color:#c8a259;

        }
    }
    span{
        color:#c8a259
    }
    @media screen and (max-width:1000px){
        html{
            font-size:80%;
        }
    }
    @media screen and (max-width:700px){
        html{
            font-size:60%;
        }
    }
    @media screen and (max-width:465px){
        html{
            font-size:40%;
        }
    }
`;
export default GlobalStyle;
