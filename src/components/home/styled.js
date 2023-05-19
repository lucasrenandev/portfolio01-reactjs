import styled from "styled-components";
import background from "../../assets/background.jpg"

export const Home = styled.section`
    height: 100vh;
    background: url(${background}) no-repeat center center / cover;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;

    @media (max-width: 1301px) {
        grid-template-columns: 1fr;
        height: 80vh;
    } 
`
export const HomeText = styled.main`

`
export const H4 = styled.h4`
    color: #d2a9d2;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 2px;

    @media (max-width: 1301px) {
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`
export const H1 = styled.h1`
    font-size: var(--big-font);
    font-weight: 700;
    margin: 15px 0 15px;
`
export const H3 = styled.h3`
    font-size: 1.6rem;
    font-weight: 700;

    @media (max-width: 1301px) {
        font-size: 1.4rem;
    }

    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`
export const Form = styled.form`
    margin-top: 3rem;
    width: 400px;
    max-width: 100%;
    height: auto;
    position: relative;

    @media (max-width: 600px) {
        width: 290px;
    }

    @media (max-width: 320px) {
        width: 260px;
    }
`
export const InputEmail = styled.input`
    width: 100%;
    height: auto;
    border: 2px solid var(--main-color);
    outline: none;
    padding: 14px 125px 14px 15px;
    border-radius: 30px;

    &::placeholder {
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 1px;
    }
`
export const InputSubmit = styled.input`
    position: absolute;
    content: '';
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    border: none;
    outline: none;
    background-color: var(--main-color);
    color: var(--text-color);
    padding: 10px 25px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    cursor: pointer;
`