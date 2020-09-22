const express = require('express');
const app = express();

app.get('/',(req, res)=>{
   // res.statusCode = 200;
    res.send('Vai Corintians');

})
app.get('/admin',(req, res)=>{
   // res.statusCode = 200;
    res.send('acessando administração');

})
app.get('/admin/:id',(req, res)=>{
   // res.statusCode = 200;
    res.send('acessando administração com o id: '+req.params.id);

})

app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`);
})