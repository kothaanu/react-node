import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import '../../css/App.css';
import UserCard from './UserCard';
import {getUsers} from "../../actions/getUsers";

function UserInfo() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const loading = useSelector(state => state.usersReducer.loading);
    const error = useSelector(state => state.usersReducer.error);

    // useEffect(()=> {
    //     dispatch(getUsers([
    //         {
    //             id: 1,
    //             name: 'Anwwu Kotha',
    //             company:{name: 'Direct Realty'},
    //             message: 'I am a realtor',
    //         }
    //     ]))
    // }, []);

    useEffect(()=> {
        dispatch(getUsers())
    }, []);

    return (
    <>
        {users.loading && <p>please wait while we load the users</p>}
        {
            users.length >0 && users.map((user) => (
            <UserCard user={user} key={user.id}/>
            ))
        }
        {users.length === 0 && <p>No Users Found</p>}
        {error  && <p>Error while loading Users Found</p>}
    </>
    );
};

export default UserInfo;
