const express = require('express');
const app = express();
//const jwt = require('jsonwebtoken');
//const jwt_verify = require('../jwt/jwt_helper');
//let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
//let jwtSecretKey = process.env.JWT_SECRET_KEY;
const connect = require('./db_connect');
const connection = connect.con;

exports.test = function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var sql = "select * from user";
    connection.query(sql, function (err, result, fields){
        if(err){
            throw err;
        }else{
            res.send(JSON.stringify({result}))
        }
    })
    //res.send(JSON.stringify("Hello prince you are great"));
        
};
