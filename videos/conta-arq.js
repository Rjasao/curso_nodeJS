const fs = require('fs');
const domain = require('domain').create();

fs.readdir('./src',function(error,files){
   console.log(files);
});

domain.on("error",function(erros){
   console.log(erros);
});