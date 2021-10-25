import React from "react";

const UserCard = (props) => {
    return (
        <div>
            <h5>{props.user.name}</h5>
            <h6>{props.user.company.name}</h6>
            <p>{props.user.email}</p>
        </div>
    )
}

export default UserCard;