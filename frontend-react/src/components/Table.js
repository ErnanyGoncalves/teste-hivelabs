import React from 'react';
import api from '../services/api';
import { Link } from "react-router-dom";

import UserModal from './UserModal';

export default class Table extends React.Component {

    state = {
        user: null
    }

    deleteUser = async (i) => {
        const response = await api.delete('/user/' + i).then(res => {
            console.log(res);
        });
        return this.props.handler();
    }

    showUser = async (i) => {
        const response = await api.get('/user/' + i).then(res => {
            this.setState({ user: res.data[0] });
        });
    }

    render() {
        return (
            <div>
                <h1 className="mt-5 mb-5">Registered Users</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user => (
                            <React.Fragment key={user.id}>
                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>
                                        <div className="row">
                                            <div className="col">
                                                {user.name}
                                            </div>
                                            <div className="col">
                                                {user.is_admin ? <span className="badge badge-danger">ADM</span> : <span></span>}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="row">
                                            <div className="col">
                                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#user-modal-${user.id}`} onClick={() => this.showUser(user.id)}>Show</button>
                                            </div>
                                            <div className="col">
                                                <Link to={`/user/${user.id}/edit`} type="button" className="btn btn-warning">Edit</Link>
                                            </div>
                                            <div className="col">
                                                <button type="button" className="btn btn-danger" onClick={() => this.deleteUser(user.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <UserModal user={user} />
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div >
        );
    }
}
