const router = require("express").Router();
const LeadController = require("../controllers/lead.controller");
const auth = require("../middleware/auth.middleware");

router.post("/", auth, LeadController.createLead);
router.get("/", auth, LeadController.getLeads);

module.exports = router;