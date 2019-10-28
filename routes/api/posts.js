const express = require('express');
const router = express.Router();

// @route    Get api/poste
// @desc     Test route
// @acess    Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
