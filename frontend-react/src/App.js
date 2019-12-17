import React from 'react';

import api from './services/api';
import Routes from './services/routes';

import Header from './components/Header';
import EmptyTable from './components/EmptyTable';
import Table from './components/Table';
import Form from './components/Form';


export default class App extends React.Component {

  constructor(props) {
    //n vem nda de index.js
    super(props);
    console.log(props);
  }

  state = {
    users: [],
    usersLength: 0
  }


  getUsers = async () => {
    const response = await api.get('');
    this.setState({ users: response.data, usersLength: response.data.length });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        <Routes usersLength={this.state.usersLength} users={this.state.users} />
        {/* {(this.state.users.length > 0) ? <Table users={this.state.users} /> : <EmptyTable />}
          <Form userid={22} /> */}
      </div>
    );
  }
}

