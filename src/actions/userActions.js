import axios from 'axios'
export function addUser(user) {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export function deleteUser(user) {
    return { type: 'DELETE_USER',
     payload:  user 
     }
}

export function updateUser(user) {
    return { type: 'UPDATE_USER',
             payload:  user  
            }
}

///////// Asynchronic actions
// using promis middleware , it automatically dispatch FETCH_USERS_PENDING, FETCH_USERS_REJECTED,FETCH_USERS_FULFILLED
export function fetchUsers(){
    return {
        type:'FETCH_USERS',
        payload: axios.get('http://almog.herokuapp.com/api/players')
    } 
}


