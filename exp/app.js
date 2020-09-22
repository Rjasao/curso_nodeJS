const express = require('express');
const app = express();

const adminRoutes = require ('./routes/admin')
const usuarioRoutes = require ('./routes/usuarios')


app.use(express.json());

app.get('/',(req, res)=>{
   // res.statusCode = 200;
    res.send('Vai Corintians');

})



app.use('/admin', adminRoutes)
app.use('/usuarios', usuarioRoutes)



app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`);
})