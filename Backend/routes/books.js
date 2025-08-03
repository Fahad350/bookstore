const express = require("express");
const { getBooks } = require("../controller/books");

const router = express.Router();
// api
router.get("/", getBooks);

module.exports = router;
