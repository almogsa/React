import React from 'react';
import {connect} from 'react-redux'
import Player from '../components/Player'


 class Players extends React.Component{

    render(){
        const players = this.props.users.map( (user,index,arr) => {
          //  return <div key={user._id}>{user.name} </div>
            return <Player key={index} name={user.name}  user={user}></Player>
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
