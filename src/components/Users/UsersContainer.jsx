import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {followAC,unfollowAC,setUsersAC,setCurrentPageAC,setTotalUsersAC,toggleIsFetchingAC} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {

       return <>
        { this.props.isFetching ? <Preloader /> : null }
           <Users
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               currentPage={this.props.currentPage}
           />
        </>
    }
}

let mapStateToPorps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsers: (totalUsersCount) => {
            dispatch(setTotalUsersAC(totalUsersCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }

    }
}

export default connect(mapStateToPorps,mapDispatchToProps)(UsersContainer);