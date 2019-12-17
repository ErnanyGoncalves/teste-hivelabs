import React from 'react';

import api from './services/api';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Table from "./components/Table";
import EmptyTable from "./components/EmptyTable";
import Form from "./components/Form";

export default class App extends React.Component {

  constructor(props) {
    super(props);
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

  handler = () => {
    this.getUsers();
  }
  
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => (
              this.state.usersLength > 0 ?
                <Table users={this.state.users} handler={this.handler} />
                : <EmptyTable />)
            } />
            <Route path="/user/new" component={Form} render={() => <Form {...this.props} handler={this.handler} />} />
            <Route path="/user/:id/edit" component={Form} render={() => <Form handler={this.handler} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

