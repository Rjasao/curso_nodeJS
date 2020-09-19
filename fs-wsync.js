const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do o arquivo");

const dados = fs.readFile("file.txt",(err, data)=>{
    if (err) throw err;
    console.log("Terminei a leitura do arquivo file.txt");
});

console.log("Executando o console após o arquivo");

console.log((process.hrtime()[0]/60).toFixed(5));