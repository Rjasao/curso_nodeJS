
const fs = require('fs')
const assets = ['css','js','image','fonts','lib']


function make(dir){

        dir.forEach((item)=>{  
            
            fs.mkdir(`../fs/projeto/assets/${item}`, {recursive: true},(err, data)=>{
                if(err) throw err
                console.log('Diretório criado com sucesso!',item)
        })
    })
}
make(assets)