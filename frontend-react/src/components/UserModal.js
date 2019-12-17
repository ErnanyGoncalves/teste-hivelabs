import React from 'react';

import api from '../services/api';
import { Link } from "react-router-dom";
import $ from 'jquery';

const UserModal = (props) => {

    const deleteUser = async (i) => {
        const response = await api.delete('/user/' + i).then(res => {
            console.log(res);
        });
        $('#user-modal-' + i).modal('hide');
        
    }

    return (
        <div className="modal fade" id={`user-modal-${props.user.id}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content text-center">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-title">#{props.user.id} - {props.user.name}</h5> <span className="badge badge-danger justify-content-end">{props.user.is_admin ? "ADM" : ""}</span>
                    </div>
                    <div className="modal-body">
                        <p><span className="font-weight-bold">Gender: </span>{props.user.gender}</p>
                        <p><span className="font-weight-bold">Birthdate: </span>{props.user.birthdate}</p>
                        <p><span className="font-weight-bold">Email: </span>{props.user.email}</p>
                    </div>
                    <div className="modal-body">
                        <p><span className="font-weight-bold">Created at: </span>{props.user.created_at}</p>
                        {props.user.updated_at !== null ?
                            <p><span className="font-weight-bold">Last update at: </span> {props.user.updated_at}</p>
                            : <></>
                        }
                    </div>
                    <div className="modal-footer">
                        <Link onClick={() => { $('#user-modal-' + props.user.id).modal('hide') }} to={`/user/${props.user.id}/edit`} type="button" className="btn btn-warning">Edit</Link>

                        <button onClick={() => deleteUser(props.user.id)} type="button" className="btn btn-danger">Delete</button>

                        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserModal;