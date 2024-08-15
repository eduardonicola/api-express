const express = require('express');
const User = require('./User'); // Importando o modelo User
const sequelize = require('./database'); // Importando a conexão do banco de dados

const app = express();

// Sincroniza o modelo com o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
});

// Rota para cadastrar um novo usuário
app.get('/register', async (req, res) => {
  const { name, email } = req.query;

  if (!name || !email) {
    return res.status(400).send('Nome e email são obrigatórios.');
  }

  try {
    // Cria um novo usuário no banco de dados
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).send('Erro ao cadastrar usuário');
  }
});

app.get('/users', async (req, res) => {
    try {
      // Recupera todos os usuários do banco de dados
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao listar usuários:', error);
      res.status(500).send('Erro ao listar usuários');
    }
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
