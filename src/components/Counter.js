import React, { Component } from 'react';
import {connect} from 'react-redux'


 class Counter extends React.Component{

    render(){
        return(
            <div>
            <div> Counter </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ users: state.users })


export default connect(mapStateToProps,null)(Counter);
