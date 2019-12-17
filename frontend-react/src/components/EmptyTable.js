import React from 'react';
import { Link } from "react-router-dom";

const EmptyTable = () => {
    return (
        <div className="text-center mt-5">
            <h3>No users created!</h3>
            <p>Create the first one</p>
            <Link to="/user/new" className="btn btn-success btn-lg">Create User</Link>
        </div>
    );
}

export default EmptyTable;