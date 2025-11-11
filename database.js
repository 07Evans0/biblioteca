const mysql = require('mysql')

function conectar() {
    const conexao = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'senai',
        database : 'biblioteca'
    })
    
    return conexao;
}

module.exports = { conectar }

