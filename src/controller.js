const express = require('express');
const app = express();
// const jwt = require('jsonwebtoken');
const router = express.Router();
const model = require('./model');


module.exports = router.get('/test',model.test);