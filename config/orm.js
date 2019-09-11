const connection = require("connection");

function selectAll(target, table) {
  return new Promise(function(resolve, reject) {
    connection.query("Select ? from ?", [target, table], (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function insertOne() {}

function updateOne() {}

module.exports = { selectAll, insertOne, updateOne };
