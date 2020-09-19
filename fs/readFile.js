const fs = require('fs')
// bloqueante
fs.readFile('texto.txt',(err, data)=>{
    if(err) throw err

   // console.log(data.toString())

})
//Não bloqueante
const texto = fs.readFileSync("texto.txt")
console.log(`Texto: ${texto}`)