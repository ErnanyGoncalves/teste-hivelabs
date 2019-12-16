import React from 'react';

const UserModal = () => {
    return (
        <div className="modal fade" id="user-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content text-center">
                    <div class="modal-header">
                        <h5 className="modal-title" id="modal-title">#1 - Ernany</h5> <span className="badge badge-danger justify-content-end">ADM condição aqui</span>
                    </div>
                    <div class="modal-body">
                        <p><span className="font-weight-bold">Gender: </span>Male</p>
                        <p><span className="font-weight-bold">Birthdate: </span>17/11/1994</p>
                        <p><span className="font-weight-bold">Email: </span>ernany@email.com</p>
                    </div>
                    <div class="modal-body">
                        <p><span className="font-weight-bold">Created at: </span>data</p>
                        <p><span className="font-weight-bold">Last update at: </span>condição - data</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-warning">Edit</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserModal;