const insuranceCompanyRepository = require("../repositories/insuranceCompanyRepository");
const { status, TOKEN_SECRET_KEY } = require("../lib/constansts");
const jwt = require('jsonwebtoken');


const addInsuranceCompany =  async function(req){
    const result = await insuranceCompanyRepository.addInsuranceCompany(req.body);
    if (result) return status.SUCCESS;
    return status.REGISTER_FAIL;
}

const editInsuranceCompany =  async function(req){
    const result = await insuranceCompanyRepository.editInsuranceCompany(req.body);
    if (result) return status.SUCCESS;
    return status.REGISTER_FAIL;
}

const generateToken = function(payload) {
    if (!payload) return;
    return jwt.sign(payload, TOKEN_SECRET_KEY, {expiresIn: 216004} )
}

const authenticate = async function(req) {
    const result = await insuranceCompanyRepository.findInsuranceCompany(req.body);
    if (!result) return status.NO_USER;
    const payload  = {
            name: result.name,
            addressEmail: result.addressEmail,
            location: result.location,
            licenseNumber: result.licenseNumber,
            password: result.password,
            id: result._id
    }
    const token = await generateToken(payload);
    if (!token) return status.LOGIN_FAIL;
    return token;
}

const verifyToken = function(token){ 
    return jwt.verify(token, TOKEN_SECRET_KEY);
}

module.exports = {
    addInsuranceCompany,
    authenticate,
    verifyToken,
    editInsuranceCompany
};
