const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('acessando administração');

})
router.get('/:id',(req, res)=>{
    res.send('acessando administração com o id: '+req.params.id);

})

router.post('/',(req, res)=>{
    const corpo = `Login: ${req.body.login}\nSenha: ${req.body.senha}`
     res.send('Acessando administração via POST: \n'+ corpo);
  })
  
router.patch('/:id',(req, res)=>{
    res.send('acessando administração via PATCH');
})

router.put('/:id',(req, res)=>{
    res.send('acessando administração via PUT');
})

router.delete('/:id',(req, res)=>{
    res.send('acessando administração via DELETE');
})

module.exports = router