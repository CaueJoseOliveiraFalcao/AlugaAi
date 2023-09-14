const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : 'C4u3j0s3',
        database : 'aluga'
    }
);

db.connect((err) => {
    if (err) {
        console.log("Erro ao conectar no banco de dados : " , err);
    }
    else{
        console.log("Conxão com banco de dados bem succedida ");
    }
});

module.exports = db;