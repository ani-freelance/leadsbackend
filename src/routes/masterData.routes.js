const express = require("express");
const router = express.Router();
const masterController = require("../controllers/masterData.controller");

// Base URL: /masterdata/...

router.get("/districts", masterController.getDistricts);
router.get("/industries", masterController.getIndustries);
router.get("/keywords", masterController.getKeywords);
router.get("/organisations", masterController.getOrganisations);
router.get("/states", masterController.getStates);

module.exports = router;