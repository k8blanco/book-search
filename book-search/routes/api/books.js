const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const gbAPIcontroller = require("../../controllers/gbAPIcontroller");

//Get books and post books to DB"
router.route("/api/books")
    .get(booksController.findAll)
    .post(booksController.create);

//Get books from Google Books API
router.route("/api/google/books")
    .get(gbAPIcontroller.search)

//Matches with "api/books/:id"
router  
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.delete)

module.exports = router;