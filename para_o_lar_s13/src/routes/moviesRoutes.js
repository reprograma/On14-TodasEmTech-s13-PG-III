const moviesController = require('../controller/moviesController');

const express = require('express');
const router = express.Router();

router.get('/',moviesController.getAll)
router.get('/:id',moviesController.getById)
router.post('/',moviesController.create)
router.put('/:id',moviesController.update)
router.delete('/:id',moviesController.remove)

module.exports = router;