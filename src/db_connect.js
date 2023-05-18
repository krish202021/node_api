var mysql = require("mysql");

const con = mysql.createConnection({
    host:"",
    user:"admin",
    password:"",
    database: "nodeapi",
    port:3306
});
module.exports = {con}
