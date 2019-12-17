import React from 'react';
import api from '../services/api';
import { Link } from "react-router-dom";

import UserModal from './UserModal';

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    state={
        user:null
    }

    deleteUser = async (i) => {
        const response = await api.delete('/user/' + i).then(res => {
            console.log(res);
        });
    }

    showUser = async (i) => {
        const response = await api.get('/user/' + i).then(res => {
            console.log(res.data[0]);
            console.log(this);
            this.setState({user:res.data[0]});
        });
    }

    render() {
        return (
            <div>
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
                                    <td>{user.name} {user.is_admin ? <span className="badge badge-danger">ADM</span> : <span></span>}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#user-modal-${user.id}`} onClick={() => this.showUser(user.id)}>Visualizar</button>
                                        <Link to={`/user/${user.id}/edit`} type="button" className="btn btn-warning">Editar</Link>
                                        <button type="button" className="btn btn-danger" onClick={() => this.deleteUser(user.id)}>Excluir</button>
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
