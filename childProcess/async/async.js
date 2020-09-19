// soma 270 + 500
x = 270;
y = 500;
function sum(x){
        return new Promise((resolve, reject)=>{
            if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
                reject('Tá de brincadeira');
            }
            setTimeout(()=>{
                    resolve(x + y);
            },3000); // espera 3 segundos
         })
}       
        
async function main(){ // await só válido com async function
    try {
        const resultado = await sum(x);// exemplo sum('#') reject
        console.log(`Resultado com Async/Await: ${resultado}`) 
    } catch (error) {
        console.log(`Temos problemas: ${error}`)
        console.log(process.version)
    }
   
}

main();