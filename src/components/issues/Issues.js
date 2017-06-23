import React, {
    Component
} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Issue from '../issue/Issue';
import './Issues.css';

const ISSUES_API = 'https://api.myjson.com/bins/13oy8v';
const lOADER_TPL = (
  <div className="loader" key="loader"></div>
);

class Issues extends Component {
    constructor(props) {
        super(props);

        this.loading = true;
        this.state = {
            issues: [],
            loading: true
        };
    }

    componentDidMount () {
        axios.get(ISSUES_API)
            .then(res => {
                const ISSUES = res.data['issues'];
                localStorage.setItem('open_issues', JSON.stringify(ISSUES));
                console.log('ISSUES >> ', ISSUES);
                this.setState({
                    issues: ISSUES,
                    loading: false
                });
            });
    }

    getTemplate () {
        if (this.state.loading) {
            return (lOADER_TPL);
        } else {
            return (
                <ul>
                    {
                        this.state.issues.map((issue, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/issue/${issue.id}`} key={index}>
                                        <Issue issue={issue}/>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }
    }

    render () {
        return (
            <div className='issues-component'>
                <h3>Open issues</h3>
                {
                    this.getTemplate()
                }
            </div>
        );
    }
}

export default Issues;
