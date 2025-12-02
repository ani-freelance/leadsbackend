const { Tender } = require("../models");


exports.createTender = async (data) => {
  return Tender.create(data);
};

exports.getAllTenders = async (filters = {}) => {
  return Tender.findAll({ where: filters });
}

exports.getTenderById = async (id) => {
  return Tender.findByPk(id);
}   
exports.updateTender = async (id, data) => {
  return Tender.update(data, { where: { tender_id: id } });
};

exports.deleteTender = async (id) => {
  return Tender.destroy({ where: { tender_id: id } });
};      


// class TenderService {

//   async getAll(filters = {}) {
//     return Tender.findAll({ where: filters });
//   }

//   async getById(id) {
//     return Tender.findByPk(id);
//   }

//   async create(data) {
//     return Tender.create(data);
//   }

//   async update(id, data) {
//     return Tender.update(data, { where: { tender_id: id } });
//   }

//   async delete(id) {
//     return Tender.destroy({ where: { tender_id: id } });
//   }

// }

// module.exports = new TenderService();