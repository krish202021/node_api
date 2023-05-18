var mysql = require("mysql");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "node_api"
});
module.exports = {con}