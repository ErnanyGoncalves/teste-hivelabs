import React from 'react';

const EmptyTable = () => {
    return (
        <div className="text-center">
            <h3>No users created!</h3>
            <p>Create the first one</p>
            <button className="btn btn-success btn-lg">Create User</button>
        </div>
    );
}

export default EmptyTable;