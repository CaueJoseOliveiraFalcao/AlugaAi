const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwtSecretKey = 'C4u3j0s3'; // Substitua por uma chave segura em produção

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'C4u3j0s3',
        database : 'aluga'
})
const verifytoken = (req , res , next) => {
    const token = req.headers.authorization;
        
    if (!token){
        return res.status(403).json({ error: "Token not provided" });
    }

    jwt.verify(token , jwtSecretKey , (err , decoded) => {
        if (err) {
            return res.status(401).json({error : 'Token invalid'})
        }
    })

    next()
}
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
            
            const token = jwt.sign({ userId: data[0].id }, jwtSecretKey, {
                expiresIn: '1h' // Define um tempo de expiração para o token (opcional)
              });
              return res.json({token , message : 'Success'});
        } else {
            return res.json("Faile");
        }
    })
})

app.listen(8081 , ()=> {
    console.log('foi')
})