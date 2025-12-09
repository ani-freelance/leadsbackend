const router = require("express").Router();
const LeadController = require("../controllers/lead.controller");
const auth = require("../middleware/auth.middleware");

router.post("/", LeadController.createLead);
router.get("/", LeadController.getLeads);
router.put("/:id", LeadController.updateLead);
router.post("/:id/followup", LeadController.followUpLead);
router.get("/:id/followup", LeadController.getFollowUps);
router.get("/:id/activity", LeadController.getActivity);

module.exports = router;