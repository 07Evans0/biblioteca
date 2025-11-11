const conectar = require('./database')

async function listaUsuarios(){
    const conexao = await conectar();
    conts [rows] = await conexao.execute ('SELECT * FROM usuarios')
    return rows;
}

module.exports = {listaUsuarios}