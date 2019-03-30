import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import utils from './timeService';
import Counter from './components/Counter'
import store from './store/store'

class App extends Component {
 
  render() {
   // console.log(t.foo());
   // console.log(t.bar());
    //console.log(gg);
    console.log('Object utils ',utils);
    console.log(' function' ,  utils['foo']);
    return (
     
      <div className="App">
        {/* <Counter/> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
