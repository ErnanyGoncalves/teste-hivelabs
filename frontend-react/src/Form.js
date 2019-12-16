import React from 'react';

const Form = () => {
    return (
        <div>
            <h2>Criar/Editar Usuário</h2>
            <form>
                <div className="form-row">
                    <div className="col-6">
                        <label for="user-name">First name</label>
                        <input type="text" className="form-control" id="user-name" required />
                    </div>
                    <div className="col-6">
                        <label for="user-email">Email</label>
                        <input type="email" className="form-control" id="user-email" required />
                    </div>
                    <div className="col-4">
                        <label for="user-birthdate">Birthdate</label>
                        <input type="date" className="form-control" id="user-birthdate" required />
                    </div>
                    <div className="col-4">
                        <label for="user-gender">Gender</label>
                        <select id="user-gender" className="custom-select">
                            <option value="male" selected>Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <div className="form-group form-check mt-3 pt-4">
                            <input className="form-check-input" type="checkbox" id="user-isadmin" />
                            <label className="form-check-label" for="user-isadmin">Admin</label>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col text-center">
                        <button type="submit" className="btn btn-success">Create User</button>
                        <button type="submit" className="btn btn-warning">Edit User</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default Form;