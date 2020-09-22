const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
   // res.statusCode = 200;
    res.send('Vai Corintians');

})
app.get('/admin',(req, res)=>{
    res.send('acessando administração');

})
app.get('/admin/:id',(req, res)=>{
    res.send('acessando administração com o id: '+req.params.id);

})


app.post('/admin',(req, res)=>{
    const corpo = `Login: ${req.body.login}\nSenha: ${req.body.senha}`
     res.send('Acessando administração via POST: \n'+ corpo);
 
 })

app.patch('/admin/:id',(req, res)=>{
    res.send('acessando administração via PATCH');
})

app.put('/admin/:id',(req, res)=>{
    res.send('acessando administração via PUT');
})

app.delete('/admin/:id',(req, res)=>{
    res.send('acessando administração via DELETE');
})

app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`);
})