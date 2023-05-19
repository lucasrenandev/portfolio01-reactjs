import styled from "styled-components";

export const Header = styled.header`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 110px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6%;

    @media (max-width: 1301px) {
        height: 80px;
        padding: 0 1%;
    }
`
export const Logo = styled.a`
    color: #fff;
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: 1px;
`
export const NavBar = styled.nav`
    @media (max-width: 1080px) {
        position: absolute;
        top: -500px;
        right: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        background-color: #111;
        transition: top 0.45s ease;

        &.active {
            top: 100%;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;

    @media (max-width: 1080px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const List = styled.li`
    margin: 0 2rem;

    @media (max-width: 1080px) {
        margin: 1rem 0;
        padding: 1rem;
    }
`
export const NavLink = styled.a`
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    text-transform: capitalize;
    transition: color 0.45s ease;

    &:hover {
        color: var(--main-color);
    }

    @media (max-width: 1080px) {
        display: block;
    }
`
export const Button = styled.a`
    background-color: var(--main-color);
    padding: 10px 23px;
    border: none;
    border-radius: 30px;
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.8px;
    transition: transform 0.45s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 348px) {
        display: none;
    }
`
export const MenuIcon = styled.i`
    font-size: 36px;
    cursor: pointer;
    display: none;

    @media (max-width: 1080px) {
        display: inline-flex;
        align-items: center;
        z-index: 1001;
    }
`