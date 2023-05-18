require('dotenv').config()
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require("cors");
const api = require('./src/controller');

app.use(cors());

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));


app.use('/api/v1',api);


const port = process.env.PORT;

app.listen(port,()=>console.log(`running server ${port}`));  