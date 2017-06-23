import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import IssueDetails from './issue-details/IssueDetails';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
            <div>
              <Header/>
              <div className='container-fluid route-content'>
                  <Route exact path="/" component={Home}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/issue/:id" component={IssueDetails}/>
              </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
