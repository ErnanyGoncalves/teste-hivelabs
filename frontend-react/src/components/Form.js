import React from 'react';
import api from '../services/api';



export default class Form extends React.Component {

    constructor(props) {
        //n tem props
        super(props);
        console.log("FORM",props);
    }

    // createUser = async (event) => {
    //     event.preventDefault();
    //     const name = event.target["user-name"].value;
    //     const email = event.target["user-email"].value;
    //     const birthdate = event.target["user-birthdate"].value;
    //     const gender = event.target["user-gender"].value;
    //     const isadmin = event.target["user-isadmin"].checked;

    //     const response = await api.post('/user/new', {
    //         name: name,
    //         email: email,
    //         birthdate: birthdate,
    //         gender: gender,
    //         is_admin: isadmin
    //     }).then(res => {
    //         console.log(res);
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // }

    editUser = async (event) => {
        event.preventDefault();

        const newName = event.target["user-name"].value;
        const newEmail = event.target["user-email"].value;
        const newBirthdate = event.target["user-birthdate"].value;
        const newGender = event.target["user-gender"].value;
        const newIsadmin = event.target["user-isadmin"].checked;

        const response = await api.put('/user/'+this.props.userid, {
            name: newName,
            email: newEmail,
            birthdate: newBirthdate,
            gender: newGender,
            is_admin: newIsadmin
        }).then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <div>
                <h2>Criar/Editar Usuário</h2>
                <form onSubmit={this.editUser}>
                    <div className="form-row">
                        <div className="col-6">
                            <label htmlFor="user-name">First name</label>
                            <input type="text" className="form-control" id="user-name" required />
                        </div>
                        <div className="col-6">
                            <label htmlFor="user-email">Email</label>
                            <input type="email" className="form-control" id="user-email" required />
                        </div>
                        <div className="col-4">
                            <label htmlFor="user-birthdate">Birthdate</label>
                            <input type="date" className="form-control" id="user-birthdate" required />
                        </div>
                        <div className="col-4">
                            <label htmlFor="user-gender">Gender</label>
                            <select id="user-gender" className="custom-select">
                                <option defaultValue="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <div className="form-group form-check mt-3 pt-4">
                                <input className="form-check-input" type="checkbox" id="user-isadmin" />
                                <label className="form-check-label" htmlFor="user-isadmin">Admin</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col text-center">
                            <button type="submit" className="btn btn-success">Create User</button>
                            {/* <button type="submit" className="btn btn-warning">Edit User</button> */}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
