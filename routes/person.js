const express = require("express");
const router = express.Router();

/* localhost:8000/api/register */

router.get("/create", (req, res) => {
    //
    res.send("Create person ENDPOINT");
});

router.get("/update", (req, res) => {
    //
    res.send("Update person ENDPOINT");
});

module.exports = router;