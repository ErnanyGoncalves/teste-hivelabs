const mysql = require('mysql2');

const pool  = mysql.createPool({
  host            : 'localhost',
  user            : 'root',
  password        : 'root-admin',
  database        : 'hivelabs'
});

module.exports = pool.promise();