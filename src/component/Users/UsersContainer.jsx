import React from 'react'
import {connect} from 'react-redux'
import {getUsersThunkCreator,follow,unfollow, pageActive } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'


class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged=(page)=>{
        debugger;
        this.props.getUsers(page,this.props.pageSize)
    }

    render(){
    return <>
    {this.props.isFetching?<Preloader/>:null}
        <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
    />
    </>
    }
}

let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize:state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{pageActive,getUsers:getUsersThunkCreator,follow,unfollow})
)(UsersContainer)