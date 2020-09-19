const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const url = `http://${hostname}:${port}/`;

let conteudo = ''

readFile('index.html',(err, data)=>{
    if(err) throw err
    conteudo = data
})

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain'); ele śo lê
  res.setHeader('Content-Type', 'text/html'); // interpreta
  res.end(conteudo);
});

server.listen(port, hostname, () => {
console.log(`Server rodando em ${url}`);
});

const open = (process.platform == 'darwin'? 'open':
process.platform == 'win32'? 'start':'xdg-open')

require('child_process').exec(open + ' ' + url);