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
        &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-top-right-radius:10px ;
        border-bottom-right-radius:10px ;
        background-color: #f5f5f5;
      }
      &::-webkit-scrollbar {
        width: 12px;
        background-color: #f5f5f5;
        border-top-right-radius:10px ;
        border-bottom-right-radius:10px ;
      }
      &::-webkit-scrollbar-thumb {
        border-top-right-radius:10px ;
        border-bottom-right-radius:10px ;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #555;
      }
    }
    body{
        background-color: rgba(0, 0, 0, 0.72);

    }
`;
