// soma 270 + 5000
soma(270, resolveSoma);

function soma(x, callback){
        return setTimeout(()=>{
                return callback (null, x + 500);
        },5000); // espera 3 segundos
}
// calback function
function resolveSoma(err, resultado){ // dois resultado
        if(err) throw err;
        console.log(resultado); //=>na tela
}

