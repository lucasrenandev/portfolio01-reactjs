import styled from "styled-components";

export const About = styled.section`
    background-color: var(--second-color);
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;

    @media (max-width: 1080px) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 4rem;
    }
`
export const AboutImage = styled.figure`
    @media (max-width: 1080px) {
        order: 2;
    }
`
export const Image = styled.img`
    width: 450px;
    max-width: 100%;
    height: auto;
`
export const AboutText = styled.main`

`
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 700;
    text-transform: capitalize;
`
export const H3 = styled.h3`
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: capitalize;
    margin: 20px 0 20px;

    @media (max-width: 1301px) {
        font-size: 1.3rem;
    }

    @media (max-width: 600px) {
        font-size: 1.1rem;
    }
`
export const Paragraph = styled.p`
    color: #d2a9d2;
    font-size: var(--p-font);
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 1.8;
`
export const Button = styled.button`
    margin-top: 2rem;
`