const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require("dotenv-safe");


dotenv.config({
    example: '.env',
  });
  
const jwt = require("jsonwebtoken")
const SECRET_KEY = process.env.SECRET;
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'C4u3j0s3',
        database : 'aluga'
})
app.get('/dashboard' , verifyJwt , (req , res) =>{
    
})

app.post('/signup' , (req , res) => {
    const sql = 'INSERT INTO users (`username` , `email` , `password`) VALUES (?)';
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ];
    db.query(sql , [values] , (err , data) => {
        if(err){
            console.error(err); 
            return res.status(500).json({ error: "Error" });
        }
        return res.json(data);
    })
})
app.post('/login' , (req , res , next) => {
    const sql = 'SELECT * FROM users WHERE `email` = ? AND `password` = ?';
    db.query(sql , [req.body.email,req.body.password] , (err , data) => {
        if(err){
            console.error(err); 
            return res.status(500).json({ error: "Error" });
        }
        if (data.length > 0){
            userId = data[0].id;
            const token = jwt.sign({userId} , SECRET_KEY , {
                expiresIn : 300
            })
            return res.json({auth : true , token : token});
        } else {
            return res.json("Faile");
        }
    })
})
app.post('/logout' , function(req ,res) {
    res.json({auth : false , token : null})
});
function verifyJwt(req ,res , next){
    const token = req.headers = ['authorization'];
    if (!token) return res.status(401).json({auth : false , message : 'No token provided'});

    jwt.verify(token , SECRET_KEY ,function(err , decoded){
        if (err) return res.status(500).json({auth : false , message : 'Falied to authenticate token'});

        req.userId = decoded.id;
        next();
    })
}
app.listen(8081 , ()=> {
    console.log('foi')
})