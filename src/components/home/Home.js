import React, {
    Component
} from 'react';
import {
  Route
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import $ from 'jquery';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: []
        };
    }

    componentDidMount () {
        axios.get('https://api.myjson.com/bins/p3rdd')
            .then(res => {
                const ISSUES = res.data['issues'];
                console.log('ISSUES >> ', ISSUES);
                this.setState({
                    issues: ISSUES
                });
                $('.icon-right-arrow').show();
            });
    }

    displayContent (evt) {
        console.log('Here', evt);
        const CONTEXT = evt.currentTarget;

        $('.panel-body').slideUp();
        $('.icon-down-arrow').hide();
        $('.icon-right-arrow').show();

        $(CONTEXT).hide();
        $(CONTEXT).siblings('.icon-down-arrow').show();
        $(CONTEXT).siblings('.panel-body').slideDown();
    }

    hideContent (evt) {
        console.log('Here', evt);
        const CONTEXT = evt.currentTarget;

        $('.panel-body').slideUp();
        $('.icon-down-arrow').hide();
        $('.icon-right-arrow').show();

        $(CONTEXT).hide();
        $(CONTEXT).siblings('.icon-right-arrow').show();
        $(CONTEXT).siblings('.panel-body').slideUp();
    }

    render() {
        return (
            <div className='home-component'>
                <h1>Open issues</h1>
                <ul>
                    {
                        this.state.issues.map((issue, index) => {
                            return (
                                <div key={index} className="panel panel-default issue-panel">
                                  <div className="panel-heading">
                                      <li>
                                          <h4>{issue.id} {issue.summary}</h4>
                                      </li>
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
                                  <span className="fa fa-caret-right icon-arrows icon-right-arrow" aria-hidden="true" onClick={this.displayContent}></span>
                                  <span className="fa fa-caret-down icon-arrows icon-down-arrow" aria-hidden="true" onClick={this.hideContent}></span>
                                </div>
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
