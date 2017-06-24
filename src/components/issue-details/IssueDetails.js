import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './IssueDetails.css';

class IssueDetails extends Component {
    constructor(props) {
        super(props);
        this.issueId = props.match.params.id;
        this.state = {
            issue: []
        };
    }

    componentDidMount () {
        const ISSUES = JSON.parse(localStorage.getItem('open_issues')) || [];
        let self = this;
        let issue = ISSUES.filter(function(issue) {
            return self.issueId === issue.id;
        });

        self.setState({
            issue: issue
        });
    }

    render () {
        return (
            <div className='issue-details-container'>
                <div className='open-issues-link'>
                    <Link to='/'>
                        <span className="fa fa-angle-double-left" aria-hidden="true"></span>
                        <span> Open issues</span>
                    </Link>
                </div>
                {
                    this.state.issue.map((issue, index) => {
                        return (
                        <div key={index} className="panel panel-default issue-detail-panel">
                            <div className="panel-heading issue-detail-heading">
                                <h4>{issue.id} {issue.summary}</h4>
                            </div>
                            <div className="panel-body issue-details">

                                <div className='details-wrapper'>
                                    <h5>Details</h5>
                                    <div className='details-row-1 row'>
                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                            <label className='issue-label'>Type:</label>
                                            <span> {issue.type}</span>
                                        </div>
                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                            <label className='issue-label'>Priority:</label>
                                            <span> {issue.priority}</span>
                                        </div>
                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                            <label className='issue-label'>Sprint:</label>
                                            <span> {issue.sprint}</span>
                                        </div>
                                    </div>
                                    <div className='details-row-2 row'>
                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                            <label className='issue-label'>Component:</label>
                                            <span> {issue.component}</span>
                                        </div>
                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                            <label className='issue-label'>Status:</label>
                                            <span> {issue.status}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='description-wrapper'>
                                    <h5>Description</h5>
                                    <span>{issue.description}</span>
                                </div>
                            </div>
                        </div>
                    )})
                }
            </div>
        );
    }
}

export default IssueDetails;
