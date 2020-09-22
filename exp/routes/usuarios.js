const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('Listando os Usuários');

})
router.get('/:id',(req, res)=>{
    res.send('Listando o usuário: '+req.params.id);

})

module.exports = router


