import React from 'react';
import { Link } from 'react-router-dom';

const Loader = () => {
    return (
        <div className="loader" key="loader"></div>
    );
};

const BackLink = ({href, label}) => {
    return (
        <Link className='back-link' to={href}>
            <span className="fa fa-angle-double-left" aria-hidden="true"></span>
            <span> {label}</span>
        </Link>
    );
};

const NextLink = ({href}) => {
    return (
        <Link className='next-link' to={href}>
            <span>Next </span>
            <span className="fa fa-angle-right" aria-hidden="true"></span>
        </Link>
    );
};

const PrevLink = ({href}) => {
    return (
        <Link className='prev-link' to={href}>
            <span className="fa fa-angle-left" aria-hidden="true"></span>
            <span> Previous</span>
        </Link>
    );
};

export {
    Loader,
    BackLink,
    NextLink,
    PrevLink
};
