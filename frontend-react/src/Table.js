import React from 'react';

import UserModal from './UserModal';

const Table = () => {
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
                <tr>
                    <th scope="row">1</th>
                    <td>Mark <span className="badge badge-danger">ADM</span></td>
                    <td>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#user-modal">Visualizar</button>
                        <button type="button" className="btn btn-warning">Editar</button>
                        <button type="button" className="btn btn-danger">Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <UserModal />
        </div>
    );
}


export default Table;