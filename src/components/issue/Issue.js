import React, {
    Component
} from 'react';
import './Issue.css';

class Issue extends Component {
    constructor(props) {
        super(props);

        this.issue = this.props.issue;
    }

    render () {
        return (
            <h4>{this.issue.id} {this.issue.summary}</h4>
        );
    }
 }

 export default Issue;
