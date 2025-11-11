const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Esta vivo</h1>');
});

app.get('/usuario', (req, res) => {
    res.send('Listagem de usuarios');
})

app.post('/usuario', (req, res) => {
    res.send('Adiciona novo usuario');
})

app.put('/usuario', (req, res) => {
    res.send('Atualiza usuario existente');
})

app.delete('/usuario', (req, res) => {
    res.send('Deleta usuario');
})

app.listen(3000);