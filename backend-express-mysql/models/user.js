const db = require("../util/database");

module.exports = class User {
    constructor(id, name, email, birthdate, gender, is_admin, created_at, updated_at) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.gender = gender;
        this.is_admin = is_admin; 
        this.created_at = created_at; 
        this.updated_at = updated_at;
    }

    createUser() {
        console.log(`INSERT INTO users (name,email,birthdate,gender,is_admin) VALUES ('${this.name}', '${this.email}', '${this.birthdate}', '${this.gender}', ${this.is_admin})`);
        return db.execute(`INSERT INTO users (name,email,birthdate,gender,is_admin) VALUES ('${this.name}', '${this.email}', '${this.birthdate}', '${this.gender}', ${this.is_admin})`);
    }

    editUser(id) {
        console.log(`UPDATE users SET name = '${this.name}', email = '${this.email}', birthdate = '${this.birthdate}', gender = '${this.gender}', is_admin = ${this.is_admin} WHERE id = ${id}`);
        return db.execute(`UPDATE users SET name = '${this.name}', email = '${this.email}', birthdate = '${this.birthdate}', gender = '${this.gender}', is_admin = ${this.is_admin} WHERE id = ${id}`);
    }

    static getUsers() {
        return db.execute(`SELECT * FROM users`);
    }

    static getUser(id) {
        return db.execute(`SELECT * from users WHERE id = ${id}`);
    }


    static deleteUser(id) {
        return db.execute(`DELETE from users WHERE id = ${id}`);
    }
}