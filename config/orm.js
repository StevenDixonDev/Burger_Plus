const connection = require("./connection");

function selectAll(table) {
  return _query("Select * from ??", [table]);
}

function insertOne(burger_name) {
  return new Promise(function (resolve, reject) {
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (? , false)", [burger_name], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function updateOne(table, target, id, value) {
  return new Promise(function (resolve, reject) {
    connection.query("UPDATE ? SET ?? = ? WHERE id = ?", [table, target, value, id], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

module.exports = { selectAll, insertOne, updateOne };

// create a query function to wrap connection.query
function _query(...parameters) {
  // create a function that resolves or rejects the promise
  function promise_resolver(resolve, reject) {
    function query_resolver (err, data){
      if (err) reject(err);
      resolve(data);
    }
    return connection.query(...parameters, query_resolver);
  }

  return new Promise(promise_resolver);
}

