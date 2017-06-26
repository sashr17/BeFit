import React, { Component } from 'react';

import { BackLink, NextLink, PrevLink } from '../shared/SharedComponents';
import './IssueDetails.css';

const ISSUES = /*JSON.parse(localStorage.getItem('open_issues')) || */ [];

class IssueDetails extends Component {
    constructor(props) {
        super(props);
        this.issueId = props.match.params.id;
        this.state = {
            issue: {},
            issueIndex: 0,
            totalIssues: 0
        };
    }

    componentDidMount () {
        let issueObj = this.extractIssue(ISSUES, this.issueId);
        this.setState({
            issue: issueObj.issue,
            issueIndex: issueObj.index,
            totalIssues: ISSUES.length
        });
    }

    componentWillReceiveProps(nextProps: props) {
        this.issueId = nextProps.match.params.id;
        let issueObj = this.extractIssue(ISSUES, this.issueId);
        this.setState({
            issue: issueObj.issue,
            issueIndex: issueObj.index,
            totalIssues: ISSUES.length
        });
    }

    extractIssue (issues, issueId) {
        for (let i = 0; i < issues.length; i++) {
            if (issues[i]['id'] === issueId) {
                return {
                    issue: issues[i],
                    index: i
                }
            }
        }
        return false;
    };

    prevIssue (issues, index) {
        if (index > 0) {
            return '/issue/' + issues[index - 1]['id']
        }
        return '';
    }

    nextIssue (issues, index) {
        if (index < issues.length - 1) {
            return '/issue/' + issues[index + 1]['id']
        }
        return '';
    }

    render () {
        return (
            <div className='issue-details-container'>
                <div className='issues-nav-links'>
                    <BackLink href='/' label='Open Issues'/>
                    <NextLink href={ this.nextIssue(ISSUES, this.state.issueIndex) }
                              linkStatus={this.state.issueIndex < this.state.totalIssues - 1 }/>
                    <PrevLink href={ this.prevIssue(ISSUES, this.state.issueIndex) }
                              linkStatus={this.state.issueIndex > 0 }/>
                </div>
                    <div className="panel panel-default issue-detail-panel">
                            <div className="panel-heading issue-detail-heading">
                                <h4>{this.state.issue.id} {this.state.issue.summary}</h4>
                            </div>
                            <div className="panel-body issue-details">
                                <div className='details-wrapper'>
                                    <h5>Details</h5>
                                    <div className='details-row-1 row'>
                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                            <label className='issue-label'>Type:</label>
                                            <span> {this.state.issue.type}</span>
                                        </div>
                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                            <label className='issue-label'>Priority:</label>
                                            <span> {this.state.issue.priority}</span>
                                        </div>
                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                            <label className='issue-label'>Sprint:</label>
                                            <span> {this.state.issue.sprint}</span>
                                        </div>
                                    </div>
                                    <div className='details-row-2 row'>
                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                            <label className='issue-label'>Component:</label>
                                            <span> {this.state.issue.component}</span>
                                        </div>
                                        <div className='col-xs-12 col-sm-4 col-md-4'>
                                            <label className='issue-label'>Status:</label>
                                            <span> {this.state.issue.status}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='description-wrapper'>
                                    <h5>Description</h5>
                                    <span>{this.state.issue.description}</span>
                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default IssueDetails;

// {
//     this.state.issue.map((issue, index) => {
//         return (
//         <div key={index} className="panel panel-default issue-detail-panel">
//             <div className="panel-heading issue-detail-heading">
//                 <h4>{issue.id} {issue.summary}</h4>
//             </div>
//             <div className="panel-body issue-details">
//
//                 <div className='details-wrapper'>
//                     <h5>Details</h5>
//                     <div className='details-row-1 row'>
//                         <div className='col-xs-12 col-sm-4 col-md-4'>
//                             <label className='issue-label'>Type:</label>
//                             <span> {issue.type}</span>
//                         </div>
//                         <div className='col-xs-12 col-sm-4 col-md-4'>
//                             <label className='issue-label'>Priority:</label>
//                             <span> {issue.priority}</span>
//                         </div>
//                         <div className='col-xs-12 col-sm-4 col-md-4'>
//                             <label className='issue-label'>Sprint:</label>
//                             <span> {issue.sprint}</span>
//                         </div>
//                     </div>
//                     <div className='details-row-2 row'>
//                         <div className='col-xs-12 col-sm-4 col-md-4'>
//                             <label className='issue-label'>Component:</label>
//                             <span> {issue.component}</span>
//                         </div>
//                         <div className='col-xs-12 col-sm-4 col-md-4'>
//                             <label className='issue-label'>Status:</label>
//                             <span> {issue.status}</span>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className='description-wrapper'>
//                     <h5>Description</h5>
//                     <span>{issue.description}</span>
//                 </div>
//             </div>
//         </div>
//     )})
// }
