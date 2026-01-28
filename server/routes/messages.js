const express = require('express');
const { submitMessage } = require('../controllers/messageController');

const router = express.Router();

router.post('/', submitMessage);

module.exports = router;
