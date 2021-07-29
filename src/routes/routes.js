const router = require('express').Router()


// VERBOS HTTP (4 TIPOS):

// GET - obter dados
// POST - enviar/receber dados
// PUT - atualizar dados
// DELETE - remover dados

const ProductController = require('../controllers/products')


router.get('/products/:id?', ProductController.get)
// router.post('/products', ProductController.post)
// router.put('/products/:id', ProductController.put)
// router.delete('/products/:id', ProductController.delete)

module.exports = router