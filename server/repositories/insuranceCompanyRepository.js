const insuranceCompanyModel = require("../models/insuranceCompany");
const logger = require('../service/Logger');
const crypto = require("crypto");

const encryptPassword = function(password) {
    return crypto.createHash("md5").update(password).digest("hex");
}

const addInsuranceCompany = function(insuranceCompany = {}) {
    try {
        insuranceCompany.timestamp = new Date();

        insuranceCompany.password = encryptPassword(insuranceCompany.password);
        return insuranceCompanyModel.create(insuranceCompany);
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/insuranceCompanyRepository.addInsuranceCompany",
            params: insuranceCompany,
            error : err.message
        })
        throw err;
    }
}

const editInsuranceCompany = async function(insuranceCompany = {}) {
    try {
        insuranceCompany.timestamp = new Date();
        await insuranceCompanyModel.findOneAndUpdate({ _id: insuranceCompany.id}, insuranceCompany);
        return true;
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/insuranceCompanyRepository.addInsuranceCompany",
            params: insuranceCompany,
            error : err.message
        })
        throw err;
    }
}
const findInsuranceCompany = function(opts = {}) {
    try {
        let { addressEmail, password } = opts;
        return insuranceCompanyModel.findOne({addressEmail, password: encryptPassword(password)});
    } catch (err) {
        throw err;
    }
}

module.exports = {
    addInsuranceCompany,
    findInsuranceCompany,
    editInsuranceCompany
}