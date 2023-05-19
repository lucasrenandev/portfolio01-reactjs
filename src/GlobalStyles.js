import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Josefin Sans", sans-serif;
        list-style-type: none;
        text-decoration: none;
    }

    :root {
        --bg-color: #101010;
        --main-color: #f9004d;
        --second-color: #191919;
        --text-color: #fff;
        --big-font: 4.8rem;
        --h2-font: 4.7rem;
        --p-font: 1.1rem;

        @media (max-width: 1301px) {
            --big-font: 4.2rem;
            --h2-font: 3.9rem;
        }

        @media (max-width: 600px) {
            --big-font: 3rem;
            --h2-font: 2.7rem;
        }
    }

    #root {
        min-height: 100vh;
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    img, a {
        display: inline-block;
    }

    span {
        color: var(--main-color);
    }

    section {
        width: 100%;
        padding: 100px 8% 80px;

        @media (max-width: 1301px) {
            padding: 80px 3%;
        }

        @media (max-width: 600px) {
            padding: 80px 1%;
        }
    }

    .button {
        display: inline-block;
        background-color: var(--main-color);
        padding: 12px 28px;
        border: 2px solid transparent;
        outline: none;
        color: var(--text-color);
        border-radius: 30px;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        text-transform: capitalize;
        cursor: pointer;
        transition: all 0.40s ease;

        &:hover {
            background-color: transparent;
            border: 2px solid var(--main-color);
        }
    }

`