import React from 'react'
import userImage from '../images/user.png'


class Player extends React.Component{
    
    render(){
       console.log('Player props :' , this.props)
       const {name,user} = this.props;
       const userStyle = {borderRadius:'50%',with:'50px',height:'50px'};
       
        return( 
            <div>   
                    <img style={userStyle} alt="" src={user.image || userImage }></img>
                    <div key={user.name} >{name}</div>

            </div>
        )
        
    }
}

export default Player;