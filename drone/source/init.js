const readline = require('readline');
const {creatSocket, Socket} = require('dgram');//portas udp
const CommandParser = require('./CommandParser');
const Commander = require('./Commander');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

const TELLO_CMD_PORT = 8889;
const TELLO_HOST = '192.168.10.1';

const getSocket = ()=>{
    const socket = creatSocket('udp4');
    socket.bind(TELLO_CMD_PORT);
    return socket;

}


(async function start(){
    const socket = getSocket();
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT);
    await cmder.sendInitCommand();
    const cmder = new CommandParser({
        onTakeoff: async () => {await cmder.sendTakeOff()},
        onLand: async () => {await cmder.sendLand()},
        onForward: async (dist) => {await cmder.sendForward(dist)},
        onBack: async (dist) => {await cmder.sendBack(dist)},
        onRight: async (dist) => {await cmder.sendRight(dist)},
        onLeft: async (dist) => {await cmder.sendLeft(dist)},
        onCw: async (dist) => {await cmder.sendCw(dist)},
        onCcw: async (dist) => {await cmder.sendCcw(dist)},
        onFlip: async () => {await cmder.sendFlip()},
        onBattery: async () => {await cmder.sendBattery()}
    })
    console.log(`iniciando!`);
    socket.on('messege', (msg)=>{
        console.log(`Dji tello: ${msg.toString()}`);
    })
    socket.on('error', (err)=>{
        console.log(`Dji tello ERROR: ${err}`);
    })
    socket.on('listening', ()=>{
        console.log(`Socket is listening:`);
    })
    console.log('Enter a command:');
    rl.on('line', (line)=>{
        if(!cmdp.parseCommand(line)){
            if(line == 'exit'){
                console.log('Bye');
                process.exit(0);
            }
            console.log('Not a valid command')
        }
    })
})()