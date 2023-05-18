import styled from "styled-components";

export const Services = styled.section`

`
export const Title = styled.header`
    text-align: center;
`
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 700;
    text-transform: capitalize;
`
export const ServicesContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 3.5rem;

    @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    }
`
export const Box = styled.div`
    background-color: var(--second-color);
    text-align: center;
    padding: 25px 15px;
    border-radius: 20px;
`
export const Icon = styled.i`
    font-size: 2.8rem;
    color: var(--main-color);
`
export const H4 = styled.h4`
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: capitalize;
    margin: 8px 0 1.4rem;
`
export const Paragraph = styled.p`
    color: #d2a9d2;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.8;
`
export const Button = styled.button`
    margin-top: 1.4rem;
`