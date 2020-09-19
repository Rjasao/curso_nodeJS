// soma 270 + 500
x = 270;
function soma(x){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    resolve(x + 500);
            },3000); // espera 3 segundos
         })
}       
        

soma(x).then((resultado)=>{
    console.log(`Resolvido, o resultado: ${resultado}`);//=> na tela
})
