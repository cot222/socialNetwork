import Users from "./Users";
import {connect} from "react-redux";
import {followAC,unfollowAC,setUsersAC} from '../../redux/users-reducer';

let mapStateToPorps = (state) => {
    return {
        users: state.usersPage.users
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
        setUsers: (userId) => {
            dispatch(setUsersAC(userId));
        }
    }
}

export default connect(mapStateToPorps,mapDispatchToProps)(Users) ;