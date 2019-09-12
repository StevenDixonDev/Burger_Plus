const connection = require("./connection");

function selectAll(table) {
  return new Promise(function(resolve, reject) {
    connection.query("Select * from ?", [table], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function insertOne() {}

function updateOne() {}

module.exports = { selectAll, insertOne, updateOne };
