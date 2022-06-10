const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/setups');

router.get('/', postCtrl.index)

router.post('/', postCtrl.create)

module.exports = router