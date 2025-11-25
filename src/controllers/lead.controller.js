const LeadService = require("../services/lead.service");

exports.createLead = async (req, res) => {
  try {
    const lead = await LeadService.createLead(req.body);
      return res.status(201).json({
      message: "Lead created successfully"
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await LeadService.getLeads(req.query);
    res.json(leads);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.followUpLead = async (req, res) => {
  try {
    const followup = await LeadService.followUpLead(req.params.id, req.body);
    res.json(followup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getFollowUps = async (req, res) => {
  try {
    const followups = await LeadService.getFollowUps(req.params.id);  
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};