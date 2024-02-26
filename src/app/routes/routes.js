const router = require('express').Router();
const crud = require('../controller/controller');

// POST
router.post('/crud', crud.create);

// GET
router.get('/crud', crud.findAll);

// PUT
router.put('/crud/:id', crud.update);

// DELETE
router.delete('/crud/:id', crud.delete);

module.exports = router;
