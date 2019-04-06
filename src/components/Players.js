import React from 'react';
import {connect} from 'react-redux'
import Player from '../components/Player'
import {fetchUsers,updateUserArrive} from '../actions/userActions'


 class Players extends React.Component{
    constructor(props) {
        super(props);
        
     }
    componentDidMount(){
        console.log('App starting fetch ussrs');
        // // using promis middleware , it automatically dispatch FETCH_USERS_PENDING, FETCH_USERS_REJECTED,FETCH_USERS_FULFILLED
        //   store.dispatch({
        //     type:'FETCH_USERS',
        //     payload: axios.get('http://almog.herokuapp.com/api/players')
        //   })
        this.props.dispatch(fetchUsers());
        this.handleClick = this.handleClick.bind(this)
    
      }
      handleClick(id){
            console.log('handle clicking on user : ',id)
            this.props.dispatch({ type: 'UPDATE_USER_ARRIVE',
            payload:  id  
           });

      }
    render(){
        const players = this.props.users.map( (user,index,arr) => {
          //  return <div key={user._id}>{user.name} </div>
            return <Player key={index} name={user.name}  user={user} handleClick={this.handleClick}></Player>
        })
        return(
            <div>
          
                <h1> Players </h1>
                    {players}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>  { 
    console.log('ownProps : ',ownProps)
 return{ users: state.users }
}
//  const mapDispatchToProps = (dispatch, ownProps) => ({
//      onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
//    })


export default connect(mapStateToProps,null)(Players);
