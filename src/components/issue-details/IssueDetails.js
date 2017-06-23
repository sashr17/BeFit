import React, {
    Component
} from 'react';
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
        console.log('State', this.state);
        return (
            <div className='issue-details-container'>
                <div className='open-issues-link'>
                    <Link to='/'>Back to Open issues</Link>
                </div>
                {
                    this.state.issue.map((issue, index) => {
                        return (
                        <div key={index} className="panel panel-default issue-detail-panel">
                            <div className="panel-heading">
                                <h4>{issue.id} {issue.summary}</h4>
                            </div>
                            <div className="panel-body">
                                <h4>Details</h4>
                                <div>Type: {issue.type}</div>
                                <div>Priority: {issue.priority}</div>
                                <div>Sprint: {issue.sprint}</div>
                                <hr/>

                                <h4>Description</h4>
                                <span>{issue.description}</span>
                                <hr/>

                                <h4>Attachments</h4>
                                <span>Coming soon...</span>
                                <hr/>

                                <h4>Activity</h4>
                                <span>Coming soon...</span>
                            </div>
                        </div>
                    )})
                }
            </div>
        );
    }
}

export default IssueDetails;
