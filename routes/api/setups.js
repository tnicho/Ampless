const express = require('express');
const router = express.Router();
const setupCtrl = require('../../controllers/api/setups');

router.post('/', setupCtrl.create)
router.get('/', setupCtrl.index)
router.delete('/:id', setupCtrl.delete)
router.put('/', setupCtrl.update)


module.exports = router