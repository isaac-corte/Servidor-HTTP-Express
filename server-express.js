const express = require('express');
const app = express();
const port = 8080;

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Bem vindo ao Express!');
});

// Rota de dados
app.get('/perfil', (req, res) => {
  res.json({
    nome: 'Isaac Corte',
    turma: 'DEVALD'
  });
});

// Página de erro 404
app.use((req, res) => {
  res.status(404).send('Ops! Caminho não encontrado.');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});