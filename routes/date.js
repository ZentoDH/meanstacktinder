const express = require("express");

const DateController = require("../controllers/date");

const router = express.Router();

router.post("/create", DateController.createDate);
router.get("/getAllDates", DateController.getDates);
router.delete("/delete/:id", DateController.deleteDate);

module.exports = router;