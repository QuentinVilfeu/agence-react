import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import GeneralContext from "../../contexts/GeneralContext.js";
import PropTypes from 'prop-types';

const MyLink = ({path, name}) => {

    const { handleLinkClick } = useContext(GeneralContext);

    return (
        <Link to={path} onClick={handleLinkClick}>{name}</Link>
    )
}

MyLink.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string
}

MyLink.defaultProps = {
    path: "/",
    name: "Default Link"
}

export default MyLink