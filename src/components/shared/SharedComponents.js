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

const NextLink = ({href, linkStatus}) => {
    return (
        <Link className={linkStatus ? 'next-link btn btn-default' : 'next-link btn btn-default disabled'}
              to={href}
              title='Next Issue'>
            <span className="fa fa-angle-right" aria-hidden="true"></span>
        </Link>
    );
};

const PrevLink = ({href, linkStatus}) => {
    return (
        <Link className={linkStatus ? 'prev-link btn btn-default' : 'prev-link btn btn-default disabled'}
              to={href}
              title='Previous Issue'>
            <span className="fa fa-angle-left" aria-hidden="true"></span>
        </Link>
    );
};

export {
    Loader,
    BackLink,
    NextLink,
    PrevLink
};
