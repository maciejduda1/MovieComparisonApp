import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './Presentational/Footer';
import Nav from './Containers/NavContainer';
import Main from './Containers/MainContainer';
import Compare from './Containers/CompareContainer';


class App extends Component {
  render() {
    return (
      <Router>  
        <div className="App">
          <Nav />
            <Route path='/' exact component={Main} />
            <Route path='/compare' exact component={Compare} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
