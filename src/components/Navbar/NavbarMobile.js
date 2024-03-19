import React, { useContext } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import GeneralContext from "../../contexts/GeneralContext.js";
import MyLink from './MyLink.js';

const NavbarMobile = () => {
    const {
        isOpen,
        colorNav,
        handleMobileNavToggle,
    } = useContext(GeneralContext);

    return (
        <div id="mobile-navbar">
            <Hamburger toggled={isOpen} onToggle={handleMobileNavToggle} color={colorNav}/>
            <div id="mobile-navbar-items">
                <MyLink path="/" name="Homepage" />
                <MyLink path="/login" name="Login Page" />
            </div>
        </div>
    )
}

export default NavbarMobile