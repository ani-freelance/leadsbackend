const router = require("express").Router();
const LeadController = require("../controllers/lead.controller");
const auth = require("../middleware/auth.middleware");

router.post("/", auth, LeadController.createLead);
router.get("/", auth, LeadController.getLeads);
router.post("/:id/followup", auth, LeadController.followUpLead);
router.get("/:id/followup", auth, LeadController.getFollowUps);

module.exports = router;