const tenderService = require("../services/tender.service");

exports.getTenders = async (req, res) => {
  try {
    const tenders = await tenderService.getAllTenders(req.query);
    res.json(tenders);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getTenderById = async (req, res) => {
  try {
    const data = await tenderService.getTenderById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.createTender = async (req, res) => {
  try {
    const data = await tenderService.createTender(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.updateTender = async (req, res) => {
  try {
    await tenderService.updateTender(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deleteTender = async (req, res) => {
  try {
    await tenderService.deleteTender(req.params.id);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};