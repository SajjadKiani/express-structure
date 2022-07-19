const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

/* GET programming languages. */
router.get('/', controller.get);
  
/* POST programming language */
router.post('/', controller.create);

/* PUT programming language */
router.put('/:id', controller.update);

/* DELETE programming language */
router.delete('/:id', controller.remove);

module.exports = router;
