import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import {getOneUser,getStatus,updateStatus} from '../../redux/profile-reducer ';
import {  withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component{
    state={
            userId:this.props.match.params.userId
    }
    componentDidMount(){
        if(!this.state.userId)
        { this.setState({userId:2});}
        this.props.getOneUser(this.state.userId);
        this.props.getStatus(this.state.userId);
    }
    componentDidUpdate(prevProps,prevState){
      
        if(this.props.match.params.userId!==prevProps.match.params.userId)
        {
            this.setState({userId:this.props.match.params.userId});
            this.props.getOneUser(this.props.match.params.userId);
            this.props.getStatus(this.props.match.params.userId);
        }
    }
    
    render(){
        return(<Profile {...this.props} 
        profile={this.props.profile}
        status={this.props.status} updateStatus={this.props.updateStatus}/>)
    }
}
let mapStateToProps=(state)=>({profile:state.profilePage.profile,
    status:state.profilePage.status})

// withRouter передает данные из url 
export default compose(
    connect(mapStateToProps,{getOneUser,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);