const connection = require("./connection");

function selectAll(table) {
  return new Promise(function(resolve, reject) {
    connection.query("Select * from ??", [table], (err, data) =>{
      if (err) reject(err);
          resolve(data);
    });
  });
}

function insertOne(burger_name) {
  return new Promise(function(resolve, reject) {
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (? , false)", [burger_name], (err, data) =>{
      if (err) reject(err);
          resolve(data);
    });
  });
}

function updateOne(table, id, target, value) {
  return new Promise(function(resolve, reject) {
    connection.query("UPDATE ? SET ?? = ? WHERE id = ?", [table, target, value, id], (err, data) =>{
      if (err) reject(err);
          resolve(data);
    });
  });
}

module.exports = { selectAll, insertOne, updateOne };