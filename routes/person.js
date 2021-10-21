const express = require("express");
const router = express.Router();

//localhost:8000/api/create
const { create, list, read, update, remove } = require("../controllers/person");
//middleware
const { auth } = require("../middleware/auth");

router.get("/person", auth, list);
router.get("/persons/:id", auth, read);
router.post("/person", auth, create);
router.put("/person/:id", auth, update);
router.delete("/person/:id", auth, remove);

module.exports = router;