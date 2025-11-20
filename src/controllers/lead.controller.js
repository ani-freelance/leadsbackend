const LeadService = require("../services/lead.service");

exports.createLead = async (req, res) => {
  try {
    const lead = await LeadService.createLead(req.body);
    res.json(lead);
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