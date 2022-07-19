const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

/* GET */
router.get('/', controller.get);
  
/* POST  */
router.post('/', controller.create);

/* PUT  */
router.put('/:id', controller.update);

/* DELETE  */
router.delete('/:id', controller.remove);

module.exports = router;
