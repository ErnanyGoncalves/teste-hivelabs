const express = require("express");

const userController = require('../controllers/user-controllers');

const app = express();

app.route("/").get(userController.getUsers); //Listagem

app.route("/user/:id")
    .get(userController.getUser) // Visalização
    .put(userController.editUser) // Edição
    .delete(userController.deleteUser); // Exclusão

app.route("/user/new").post(userController.createUser); // Cadastro usuário



module.exports = app;