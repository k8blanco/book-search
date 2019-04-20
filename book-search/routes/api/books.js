const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//Get books and post books to DB
router.route("/books/saved")
    //route to get all saved books
    .get(booksController.findAll)
    // .post(booksController.create);

//Matches with "api/books/:id"
router  
    .route("/:id")
    .get(booksController.findById)
    //route to save a book
    .put(booksController.update)
    //route to delete a book
    .delete(booksController.delete)

module.exports = router;