const express = require('express');
const app = express();
const port = 3000;

// Rota padrão
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Express.js!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});