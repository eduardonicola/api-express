const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

// Rota padrão
app.get('/', (req, res) => {
    res.send('API EXPRESS');
});

app.get('/:cor', (req, res) => {
    const cores = ['azul','amarerlo','vermelho','roxo']
    if(cores.includes(req.params.cor)){
        res.send(`COR ${req.params.cor}`);
        return
    }

    res.status(400).send( `${req.params.cor} Não é uma cor valida`)
    
});

app.post('/cor', (req, res) => {
    const cores = ['azul','amarerlo','vermelho','roxo']

    if(cores.includes(req.body.cor)){
        res.json({cor: req.body.cor });
        return
    }
    res.status(400).json({error: `${req.body.cor} Não é uma cor valida` })
    
});
// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});