console.log('Exibindo uma mensagem no console')

//errro

console.error(new Error('Exibindo mensagem de erro, temos um proplema!'))

const carros =['GM','FIAT','FORD','VW','RENULT','HONDA','HYUNDAY']
console.table(carros)


const dados = {name: 'Ricardo Tosi Bela', empresa: 'RCad'}
console.table(dados)

//contar processo

console.count('processo')
console.count('processo')
console.count('processo')

console.log('REsetando o processo')
console.countReset('processo')

console.count('processo')


// tempo em parte está consumindo mais
console.time('contador')
for(let i = 0; i < 100; i++){
    //console.log(`processo: ${i}`)
}
console.timeEnd('contador')


// verifica se consição está certo senão da mensagem de erro
console.assert(true, 'Faça alguma coisa')

console.assert(false,'Ih rapaz %s, que pena!','Não funcionou')

// limpa tudo
//console.clear()