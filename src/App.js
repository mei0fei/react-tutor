import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

import Header from './components/Header'

import Home from './components/Home'

class App extends Component {
  render() {
    var user = {
      name: 'anna',
      hobbies: ['sports', 'swimming']
    };
    return (
      <div className='container'>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Header />
            </div>
        </div>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Home name={'max'} age={12} user={user} >this is home page</Home>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
