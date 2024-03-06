const express = require('express');
const app = express();
const port = 3000;

// Rota padrão
app.get('/', (req, res) => {
    res.send('API EXPRESS');
});
//
app.get('/:cor', (req, res) => {
    const cores = ['azul','amarerlo','vermelho','roxo']
    if(cores.includes(req.params.cor)){
        res.send(`COR ${req.params.cor}`);
        return
    }

    res.status(400).send( `${req.params.cor} Não é uma cor valida`)
    
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});