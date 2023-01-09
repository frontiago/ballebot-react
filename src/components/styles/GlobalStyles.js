import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Sarala:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
        font-family: 'Sarala', cursive;
    }

    body {
        background: linear-gradient(to right, #2f2325 12.62%, #8e5d52 85.61%);
        color: #FFF2E7;
        line-height: 1.3;
        height: 100vh;
    }

    a {
        text-decoration: none;
        color: #fff;
    } 

    ul {
        list-style: none;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1, h2 {
        font-family: 'Righteous', sans-serif;
        font-weight: 700;
    }
`