const {writeFile} = require('fs')

writeFile("../fs/arquivo.text",'Criando arquivo de texto com writeFile', (err, data)=>{
    if(err) throw err
    console.log('Arquivo criado com sucesso!');

})