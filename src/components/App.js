import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Footer from './footer/Footer';
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
                  <Route path="/about" component={About}/>
              </div>

              <Footer/>
            </div>
        </Router>

      </div>
    );
  }
}

export default App;
