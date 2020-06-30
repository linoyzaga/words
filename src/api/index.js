const express = require('express');
const router = express.Router();
const ValidationMiddleware = require('../middlewares/validations');
const WordsController = require('../controllers/words.controller');

router.post('/counter', ValidationMiddleware.validateCounterSchema, WordsController.couter);
router.get('/statistics/:word', ValidationMiddleware.validateStatisticsSchema, WordsController.statistics);

module.exports = router;