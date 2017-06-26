import React from 'react';
import './Issue.css';

const Issue = ({issue}) => {
    return (
        <h4>{issue.project}-{issue.id} {issue.summary}</h4>
    );
};

export default Issue;
