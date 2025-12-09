const masterService = require("../services/masterData.service");

exports.getDistricts = async (req, res) => {
  try {
    const data = await masterService.getDistricts();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getIndustries = async (req, res) => {
  try {
    const data = await masterService.getIndustries();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getKeywords = async (req, res) => {
  try {
    const data = await masterService.getKeywords();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOrganisations = async (req, res) => {
  try {
    const data = await masterService.getOrganisations();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }

};

exports.getStates = async (req, res) => {
  try {
    const data = await masterService.getStates();
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }   
}

exports.getStatuses = async (req, res) => {
  try {
    const data = await masterService.getStatuses(); 
    res.json(data);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }   
}