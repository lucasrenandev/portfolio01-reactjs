import { Header, Logo, NavBar, NavList, List, 
NavLink, Button, MenuIcon } from "./styled";
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { useRef, useState } from "react";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>)
    const navRef = useRef(null)

    function toggleMenu() {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(<IoClose/>)
        }
    }
    
    return(
        <Header>
            <Logo href="/">Portfo<span>lio</span></Logo>

            <NavBar ref={navRef}>
                <NavList>
                    <List>
                        <NavLink href="#">Home</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">About us</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Services</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Skills</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Contact us</NavLink>
                    </List>
                </NavList>
            </NavBar>

            <Button href="#">Subscribe</Button>
            <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>
        </Header>
    )
}