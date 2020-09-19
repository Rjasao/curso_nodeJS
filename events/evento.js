const events = require('events')

class Evento extends events.EventEmitter{}
const meuEvento = new Evento()

meuEvento.on('seguranca',(x,y)=>{
    console.log(`Executando o evento 'seguranca': ${x} ${y}`)
})

meuEvento.emit('seguranca','userAdmin','Alterou salário')