const express = require('express');
const router = express.Router();
const setupCtrl = require('../../controllers/api/setups');

router.get('/', setupCtrl.index)

router.post('/', setupCtrl.create)

module.exports = router