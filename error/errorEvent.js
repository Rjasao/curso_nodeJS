const {EventEmitter} = require('events')
const emitter = new EventEmitter()

const validaObjeto = (val)=>{
    if(typeof val !== 'object'){
        emitter.emit('error', new Error('Tipo informado inválido'))
        console.log('objeto inválido!')
    }else{
    console.log('objeto valido!')
}
}
emitter.addListener('error', (err)=>{
    console.log('Evento: '+ err.message)
})

let dados = {name: 'Ricardo', curso: 'Eng Civil'}

validaObjeto(dados)
//validaObjeto('123')


