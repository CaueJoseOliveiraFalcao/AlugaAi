const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'C4u3j0s3',
        database : 'aluga'
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
app.post('/login' , (req , res) => {
    const sql = 'SELECT * FROM users WHERE `email` = ? AND `password` = ?';
    db.query(sql , [req.body.email,req.body.password] , (err , data) => {
        if(err){
            console.error(err); 
            return res.status(500).json({ error: "Error" });
        }
        if (data.length > 0){
            return res.json('Sucess');
        } else {
            return res.json("Faile");
        }
    })
})
app.listen(8081 , ()=> {
    console.log('foi')
})