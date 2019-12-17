import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Table from "../components/Table";
import EmptyTable from "../components/EmptyTable";
import Form from "../components/Form";

const Routes = (props) => {
    const usersLength = props.usersLength;
    const users = props.users;
    console.log(usersLength, users);
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" render={(props) => (props.usersLength != 0 ? <Table {...props} users={users} /> : <EmptyTable />)} />
                    <Route path="/user/new" component={Form} />
                    <Route path="/user/:id/edit" component={Form} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default Routes;