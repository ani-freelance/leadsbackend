const express = require("express");
const router = express.Router();
const tenderController = require("../controllers/tender.controller");

// GET all tenders
router.get("/", tenderController.getTenders);

// GET tender by ID
router.get("/:id", tenderController.getTenderById);

// CREATE tender
router.post("/", tenderController.createTender);

//UPDATE tender
router.put("/:id", tenderController.updateTender);

// DELETE tender
router.delete("/:id", tenderController.deleteTender);

module.exports = router;