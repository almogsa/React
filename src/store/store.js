import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducer from '../reducer/reducer'
import logger from 'redux-logger'
//import thunk from 'redux-thunk'
//import axios from 'axios'
import promise from 'redux-promise-middleware'

const middleware  = applyMiddleware(logger,promise)
//const middleware  = applyMiddleware(promise())
const store = createStore(reducer,middleware);
//const store = createStore(reducer);



// // using promis middleware , it automatically dispatch FETCH_USERS_PENDING, FETCH_USERS_REJECTED,FETCH_USERS_FULFILLED
//  store.dispatch({
//      type:'FETCH_USERS',
//      payload: axios.get('http://almog.herokuapp.com/api/players')
//  })
 export default store;