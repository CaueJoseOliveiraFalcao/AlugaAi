const express = require('express');
const db = require('./db');
const app = express();
const cors = require('cors');
const port = 3030;
app.use(cors())
app.use(express.json());

app.get('/showcars' , (req , res) => {
    db.query('SELECT * FROM cars WHERE cardisponible = 1' , (err , results) => {
        if (err) {
            console.log('erro ao buscar carros')
            res.status(500).json({error : 'Error ao buscar carro'});
            return
        }
        console.log(res.json(results))
    })
})
app.listen(port , () =>{
    console.log('FOI' , port)
})