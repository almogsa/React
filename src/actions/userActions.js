
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

export function fetchUsers(){
    return 
}


