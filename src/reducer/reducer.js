
let initialState = {
    fetching:false,
    fetched:false,
    error:null,
    count: 0,
    users: [],
    
}

const  reducer = (state = initialState, action) => {
    switch (action.type) {
        //case 'ADD_USER': return { ...state, action.payload }
        //case 'UPDATE_USER': return { ...state, action.payload } 
        case 'UPDATE_USER_ARRIVE': return { ...state ,users: state.users.map(user => {
            if (user._id === action.payload.id) { user.arrive = true}
            return user
        }
        )}
        case 'FETCH_USERS_PENDING': return { ...state,fetching:true }
        case 'FETCH_USERS_REJECTED': return { ...state,fetching:false,error:action.payload.error }
        case 'FETCH_USERS_FULFILLED': return { ...state,users:action.payload.data, fetching:false,fetched:true }
        default:
            return state;
    }
}
export default reducer;


