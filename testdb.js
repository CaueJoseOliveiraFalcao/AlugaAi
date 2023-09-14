const db = require('./db')

const consultId = 1;

db.query('SELECT * FROM users WHERE idusers = ?' , [consultId] , (err , results) => {
    if (err) {
        console.log(err)
    }
    console.log('Resultado da consulta:', results);
});
db.end();