const User = require("../models/user");

exports.getUsers = (req, res, next) => {
    User.getUsers().then(result => {
        res.send(result[0]);
        console.log(result[0]);
    }).catch(err => console.log(err));
};

exports.getUser = (req, res, next) => {
    const paramId = req.params.id;

    User.getUser(paramId).then(result => {
        res.send(result[0]);
        console.log(result[0]);
    }).catch(err => console.log(err));
};

exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const birthdate = req.body.birthdate;
    const gender = req.body.gender;
    const isAdmin = req.body.is_admin;
    console.log("BODY:", req.body);
    const user = new User(null, name, email, birthdate, gender, isAdmin, null, null);
    user.createUser()
        .then(() => {
            console.log("New user created!");
            res.send("New user created!");
        })
        .catch(err => console.log(err));
};

exports.editUser = (req, res, next) => {
    const paramId = req.params.id;

    const newName = req.body.name;
    const newEmail = req.body.email;
    const newBirthdate = req.body.birthdate;
    const newGender = req.body.gender;
    const newIsAdmin = req.body.is_admin;

    const user = new User(null, newName, newEmail, newBirthdate, newGender, newIsAdmin, null, null);
    user.editUser(paramId)
        .then(() => {
            console.log(`User ${paramId} modified!`);
            res.send(`User ${paramId} modified!`);
        })
        .catch(err => console.log(err));
};


exports.deleteUser = (req, res, next) => {
    const paramId = req.params.id;

    User.deleteUser(paramId)
        .then(() => {
            console.log(`User ${paramId} deleted!`);
            res.send(`User ${paramId} deleted!`);
        })
        .catch(err => console.log(err));
};