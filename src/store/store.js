import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducer/reducer'
import logger from 'redux-logger'
//import thunk from 'redux-thunk'
import axios from 'axios'
//import promise from 'redux-promise-middleware'

const middleware  = applyMiddleware(logger())
//const middleware  = applyMiddleware(promise())
//const store = createStore(reducer,middleware);
const store = createStore(reducer);

// store.dispatch((dispatch) => {
//     dispatch({type:'FETCH_USERS'})
//     axios.get('http://rest.learncode.academy/api/users');
// } )

store.dispatch({
    type:'FETCH_USERS',
    payload: axios.get('http://almog.herokuapp.com/api/players')
})
export default store;