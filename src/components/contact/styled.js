import styled from "styled-components";

export const Contact = styled.section`
`
export const ContactContent = styled.main`
    max-width: 500px;
    text-align: center;
    margin: 0 auto;
`
export const H4 = styled.h4`
    font-size: 1.9rem;
    font-weight: 700;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.8;
    margin: 15px 0 20px;
`
export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`
export const Icon = styled.i`
    background-color: var(--main-color);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.40s ease;

    &:hover {
        transform: scale(1.2);
    }
`