const express = require("express");
const {todoAddController, getAllTodoController} = require('../controllers/todoController');

const router = express.Router();

router.post('/create', todoAddController);
router.get('/', getAllTodoController);

module.exports = router;