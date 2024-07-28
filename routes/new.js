const express = require("express");
const router = express.Router();

const newControllers = require("../controllers/newControllers");
/* GET home page. */
router.get("/", newControllers.get);
router.post("/", newControllers.post);

module.exports = router;
