import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

const GeneralContext = createContext();

export function GeneralProvider({children}){

    const [scrollPosition, setScrollPosition] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [colorNav, setColorNav] = useState("#FFFFFF");

    const handleMobileNavToggle = (changePage = false) => {
        if (isOpen) {
            setIsOpen(false);
            setColorNav("#FFFFFF");
        } else {
            setScrollPosition($(window).scrollTop());
            setIsOpen(true);
            setColorNav("#000000");
            $('#generalContent').addClass("loaded");
        }
        $('#mobile-navbar-items').toggleClass("show");
        $('#generalContent').toggleClass("opened");
        if (!changePage) {
            $('#generalContent').scrollTop(scrollPosition);
            $(window).scrollTop(scrollPosition);
        }
    }

    const handleLinkClick = () => {
        $('#generalContent').scrollTop(0);
        $(window).scrollTop(0);
        handleMobileNavToggle(true);
    }

    return(
        <GeneralContext.Provider value={{
            scrollPosition, setScrollPosition,
            isOpen, setIsOpen,
            colorNav, setColorNav,
            handleMobileNavToggle,
            handleLinkClick
            }}>
            {children}
        </GeneralContext.Provider>
    )

}

GeneralProvider.propTypes = {
    children: PropTypes.node
}

export default GeneralContext;