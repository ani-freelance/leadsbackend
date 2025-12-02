const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Tender = sequelize.define("Tender", {
  id: { type: DataTypes.BIGINT.UNSIGNED, autoIncrement: true, primaryKey: true },
    type_id: DataTypes.STRING,
    type_title: DataTypes.STRING,

    category_id: DataTypes.STRING,
    category_title: DataTypes.STRING,

    org_id: DataTypes.STRING,
    org_title: DataTypes.STRING,
    org_chain: DataTypes.STRING,

    ref_no: DataTypes.STRING,
    tender_no: DataTypes.STRING,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,

    website: DataTypes.TEXT,
    link: DataTypes.TEXT,
    link_short: DataTypes.TEXT,

    is_gem: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    is_global: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    corrigendum: { type: DataTypes.BOOLEAN, defaultValue: 0 },

    fee: DataTypes.DECIMAL(15, 2),
    fee_exemption_allowed: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    fee_payable_to: DataTypes.STRING,
    fee_payable_at: DataTypes.STRING,

    emd_amount: DataTypes.DECIMAL(15, 2),
    emd_exemption_allowed: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    emd_payable_to: DataTypes.STRING,
    emd_payable_at: DataTypes.STRING,
    emd_type: DataTypes.STRING,
    emd_percentage: DataTypes.STRING,

    value: DataTypes.DECIMAL(15, 2),
    form_of_contract: DataTypes.STRING,
    contract_type: DataTypes.STRING,

    published_date: DataTypes.STRING,
    bid_doc_start_date: DataTypes.STRING,
    bid_doc_end_date: DataTypes.STRING,
    bid_sub_start_date: DataTypes.STRING,
    bid_sub_end_date: DataTypes.STRING,
    bid_open_date: DataTypes.STRING,
    bid_validity: DataTypes.STRING,
    period_of_work: DataTypes.STRING,

    industry_id: DataTypes.STRING,
    industry_title: DataTypes.STRING,
    sub_industry_id: DataTypes.STRING,
    sub_industry_title: DataTypes.STRING,
    product_id: DataTypes.STRING,
    product_title: DataTypes.STRING,

    keywords: DataTypes.TEXT,

    country_id: DataTypes.STRING,
    country_title: DataTypes.STRING,
    state_id: DataTypes.STRING,
    state_title: DataTypes.STRING,
    district_id: DataTypes.STRING,
    district_title: DataTypes.STRING,
    pincode: DataTypes.STRING,
    location: DataTypes.STRING,
    slug: DataTypes.STRING,

    is_new: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    activated_at: DataTypes.DATE,

    is_archived: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    archived_at: DataTypes.DATE,

    has_result: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    resulted_at: DataTypes.DATE,

    active: { type: DataTypes.BOOLEAN, defaultValue: 1 },

    created_date: DataTypes.STRING,
    created_time: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,

    data_provider: DataTypes.STRING,
    dp_json_data: DataTypes.TEXT,
    dp_ref_no: DataTypes.STRING,
    dp_date: DataTypes.STRING,
    dp_title: DataTypes.TEXT,
    dp_description: DataTypes.TEXT,
    dp_has_doc: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    dp_doc_path: DataTypes.TEXT

  }, {
    tableName: "tenders", 
    timestamps: false
  });

module.exports = Tender;