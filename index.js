require('dotenv').config()
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');
const api = require('./src/controller');
//const connect = require('./src/db_connect');
// const connection = connect.con;
// app.use(cors({
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));

//const multer = require('multer');
//image upload

// //! Use of Multer
// var path = require('path');
// var storage = multer.diskStorage({
//   destination: (req, file, callBack) => {
//       callBack(null, '../public_html/admin/image/post_image/')     // './public/images/' directory name where save the file
//       console.log('he',file)
//   },
//   filename: (req, file, callBack) => {
//     console.log('le',file)
//       callBack(null, file.originalname)
//   }
// })

// var upload = multer({
//   storage: storage
// });

// app.post('/api/file-upload',upload.single('image'),(req,res)=>{
//   res.setHeader('Content-Type', 'multipart/form-data');
//   console.log(JSON.stringify(req.body))
//   res.send(JSON.stringify({
//         message: "success"
//       }))
  
// });



/*
    Database connectivity
*/

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

/*
    Description: This rout is used for get letest post
    Url: '/api/post/get-latest-post'
*/
app.use('/api/v1',api);
// app.get('/api/v1/post-test',(req,res,next)=>{
//     res.send(JSON.stringify("Hello World With Prince"));
// });



/*
    Description : Generate JWT token
*/

const port = process.env.PORT;

app.listen(port,()=>console.log(`running server ${port}`));  