import React from 'react';
import { Link } from 'react-router-dom';

const Loader = () => {
    return (
        <div className="loader" key="loader"></div>
    );
};

const BackLink = ({href, label}) => {
    return (
        <Link to={href}>
            <span className="fa fa-angle-double-left" aria-hidden="true"></span>
            <span> {label}</span>
        </Link>
    );
};

export {
    Loader,
    BackLink
};
