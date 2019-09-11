const mysql = require("mysql");

const connection = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123",
    database: "burgers_db"
  }
);

modules.exports = connection;