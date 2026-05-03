const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo, toggleComplete } = require("../controllers/ToDoController");

const router =  Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)
router.put('/toggle/:id', toggleComplete);

module.exports = router;