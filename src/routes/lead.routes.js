const router = require("express").Router();
const LeadController = require("../controllers/lead.controller");
const auth = require("../middleware/auth.middleware");

router.post("/", LeadController.createLead);
router.get("/", LeadController.getLeads);
router.post("/:id/followup", LeadController.followUpLead);
router.get("/:id/followup", LeadController.getFollowUps);

module.exports = router;