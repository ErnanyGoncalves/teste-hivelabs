import React from 'react';
import api from '../services/api';

export default class Form extends React.Component {

    state = {
        editMode: false,
        user: {
            name: "",
            email: "",
            birthdate: "",
            gender: "male",
            is_admin: false
        }
    }

    componentDidMount() {
        if (typeof this.props.match.params.id !== "undefined") {
            this.setState({ editMode: true });
            this.getUser();
        }
    }

    getUser = async () => {
        const response = await api.get('/user/' + this.props.match.params.id).then(res => {
            this.setState({
                user: {
                    name: res.data[0].name,
                    email: res.data[0].email,
                    birthdate: res.data[0].birthdate.split("T")[0],
                    gender: res.data[0].gender,
                    is_admin: res.data[0].is_admin,
                }
            });
        });
    }


    createUser = async (event) => {
        event.preventDefault();
        const name = event.target["user-name"].value;
        const email = event.target["user-email"].value;
        const birthdate = event.target["user-birthdate"].value;
        const gender = event.target["user-gender"].value;
        const isadmin = event.target["user-isadmin"].checked;

        const response = await api.post('/user/new', {
            name: name,
            email: email,
            birthdate: birthdate,
            gender: gender,
            is_admin: isadmin
        }).then(res => {
            console.log(res);
        });
        this.props.history.push("/");
    }

    editUser = async (event) => {
        event.preventDefault();

        const newName = event.target["user-name"].value;
        const newEmail = event.target["user-email"].value;
        const newBirthdate = event.target["user-birthdate"].value;
        const newGender = event.target["user-gender"].value;
        const newIsadmin = event.target["user-isadmin"].checked;

        const response = await api.put('/user/' + this.props.match.params.id, {
            name: newName,
            email: newEmail,
            birthdate: newBirthdate,
            gender: newGender,
            is_admin: newIsadmin
        }).then(res => {
            console.log(res);
        });
        this.props.history.push("/");
        // return this.props.handler();
    }

    render() {
        return (
            <div>
                <h2 className="mt-5 mb-5">{this.state.editMode ? `Edit User ${this.props.match.params.id}` : "Create new User"}</h2>
                <form onSubmit={this.state.editMode ? this.editUser : this.createUser}>
                    <div className="form-row">
                        <div className="col-6">
                            <label htmlFor="user-name">First name</label>
                            <input type="text" className="form-control" defaultValue={this.state.user.name} id="user-name" required />
                        </div>
                        <div className="col-6">
                            <label htmlFor="user-email">Email</label>
                            <input type="email" className="form-control" defaultValue={this.state.user.email} id="user-email" required />
                        </div>
                        <div className="col-4">
                            <label htmlFor="user-birthdate">Birthdate</label>
                            <input type="date" defaultValue={this.state.user.birthdate} className="form-control" id="user-birthdate" required />
                        </div>
                        <div className="col-4">
                            <label htmlFor="user-gender">Gender</label>
                            <select id="user-gender" className="custom-select">
                                {this.state.user.gender === "Male" ?
                                    <React.Fragment>
                                        <option defaultValue="male">Male</option>
                                        <option value="female">Female</option>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <option defaultValue="female">Female</option>
                                        <option value="male">Male</option>
                                    </React.Fragment>}
                            </select>
                        </div>
                        <div className="col-4">
                            <div className="form-group form-check mt-3 pt-4">
                                {this.state.user.is_admin ? <input className="form-check-input" type="checkbox" id="user-isadmin" checked /> : <input className="form-check-input" type="checkbox" id="user-isadmin" />}

                                <label className="form-check-label" htmlFor="user-isadmin">Admin</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col text-center">
                            {this.state.editMode ?
                                <button type="submit" className="btn btn-warning">Edit User</button> :
                                <button type="submit" className="btn btn-success">Create User</button>}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
