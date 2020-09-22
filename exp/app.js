const express = require('express');
const app = express();
const adminRoutes = require ('./routes/admin')
const usuarioRoutes = require ('./routes/usuarios')

app.use(express.json());

app.use((req, res, next)=>{
    console.log('Executando Middleware em nível de aplicação');
    return next();
})

app.get('/',(req, res)=>{
   // res.statusCode = 200;
    res.send('Vai Corintians');

})

app.use('/admin', adminRoutes)
app.use('/usuarios', usuarioRoutes)

app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`);
})