const  Router = require('express');
const bookController = require('../controller/book.controller');
const router = new Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads' });



router.post('/book', upload.single('image'), bookController.createBook);
router.get('/book', bookController.getBooks);
router.get('/book/:id', bookController.getOneBook);
router.put('/book/:id', bookController.updateBook);
router.delete('/book/:id', bookController.deleteBook);

module.exports = router;