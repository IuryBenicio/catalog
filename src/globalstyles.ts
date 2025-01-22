import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Quicksand", serif;
        font-optical-sizing: auto;
        font-style: normal;
        list-style: none;
    }
    body{
        background-color: grey;

    }
`;
