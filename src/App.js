import React, { Component } from 'react';
import axios from 'axios'
//import logo from './logo.svg';
import './App.css';
import {utils} from './utils';
import Players from './components/Players'
import {fetchUsers} from './actions/userActions'
import store from './store/store'

class App extends Component {
 
  componentDidMount(){
    console.log('App starting fetch ussrs');
    // // using promis middleware , it automatically dispatch FETCH_USERS_PENDING, FETCH_USERS_REJECTED,FETCH_USERS_FULFILLED
    //   store.dispatch({
    //     type:'FETCH_USERS',
    //     payload: axios.get('http://almog.herokuapp.com/api/players')
    //   })
    store.dispatch(fetchUsers());

  }
  
  render() {
   // console.log(t.foo());
   // console.log(t.bar());
    //console.log(gg);
    console.log('Object utils ',utils);
    //console.log(' function' ,  utils['foo']);
    return (
     
      <div className="App">
         <Players/> 
        {/* <header className="App-header">
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
        </header> */}
      </div>
    );
  }
}
export default App;