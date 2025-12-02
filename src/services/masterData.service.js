const { 
  MasterDistrict,
  MasterIndustry,
  MasterKeyword,
  MasterOrganisation
} = require("../models");

class MasterDataService {

  async getDistricts() {
    return MasterDistrict.findAll({ where: { active: 1 } });
  }

  async getIndustries() {
    return MasterIndustry.findAll({ where: { active: 1 } });
  }

  async getKeywords() {
    return MasterKeyword.findAll({ where: { active: 1 } });
  }

  async getOrganisations() {
    return MasterOrganisation.findAll({ where: { active: 1 } });
  }
}

module.exports = new MasterDataService();