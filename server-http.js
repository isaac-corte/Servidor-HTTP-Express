// Importa o módulo HTTP
const http = require('http');

// Define a porta que será utilizada
const PORT = 3000

// Cria um objeto SERVIDOR
const server = http.createServer((req, res) => {
  // Define o cabeçalho da resposta HTTP com status e tipo de conteúdo
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Envia a resposta como 'Bem-vindo ao servidor nativo! Missao 1 concluida.'
  res.end('Bem-vindo ao servidor nativo! Missao 1 concluida. \n');
});

// Inicia o servidor e escuta na porta especificada
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


// Para que serve o método http.createServer()?
// R: cria um servidor HTTP que fica à escuta de solicitações em uma 
// porta especificada e executa uma função de retorno de chamada para 
// cada solicitação.

// O que o objeto res (response) faz em uma requisição?
// R: é o que responde uma requisicao   

// O que é o Express e por que ele é chamado de "Framework"?
// R: é uma biblioteca do Node.js criada para facilitar a construção de 
// servidores e aplicações web.
// Porque é uma estrutura pronta que ajuda no desenvolvimento de aplicações.

// O que é uma "Rota" (Route) no Express?
// R: é o caminho que o usuário acessa no navegador.