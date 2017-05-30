import React, {
    Component
} from 'react';
import {
  Route
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/p3rdd')
            .then(res => {
                const ISSUES = res.data['issues'];
                console.log('ISSUES >> ', ISSUES);
                this.setState({
                    issues: ISSUES
                });
            });
    }

    render() {
        return (
            <div className='home-component'>
                <h1>Open issues</h1>
                <ul>
                    {
                        this.state.issues.map((issue, index) => {
                            return (
                                <li key={index}>
                                    <h4><Link to={'browse/' + issue.id}>{issue.id} {issue.summary}</Link></h4>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Home;


// <hr/>

// <h4>Details</h4>
// <div>Type: {issue.type}</div>
// <div>Priority: {issue.priority}</div>
// <div>Sprint: {issue.sprint}</div>
// <hr/>
//
// <h4>Description</h4>
// <span>{issue.description}</span>
// <hr/>
//
// <h4>Attachments</h4>
// <span>Coming soon...</span>
// <hr/>
//
// <h4>Activity</h4>
// <span>Coming soon...</span>
