import React from "react";

const User = ({match}) => (
    <div>
        <h2>User: {match.params.user}</h2>
    </div>
);

export default User;
