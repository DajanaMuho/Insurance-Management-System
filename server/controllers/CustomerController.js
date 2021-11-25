const customerRepository = require("../repositories/customerRepository");
const { status } = require("../lib/constansts");


const editCustomer = async function(req) {
    req.body.insuranceCompanyId = req.insuranceCompany.id;
    const result = await customerRepository.editCustomer(req.body);
    if (result) return status.SUCCESS;
    return status.REGISTER_CUSTOMER_FAIL;
}

const getCustomers = async function(req) {
    const result = await customerRepository.getCustomers(req.insuranceCompany);
    if (result) return result;
    return status.INTERNAL_ERR;
}

const getCustomerById = async function(req) {
    const result = await customerRepository.getCustomerById({insuranceCompanyId: req.insuranceCompany.id, customerId: req.query.customerId });
    if (result) return result;
    return status.INTERNAL_ERR;
}

const deleteCustomer = async function(req) {
    const result = await customerRepository.deleteCustomer({insuranceCompanyId: req.insuranceCompany.id, customerId: req.query.customerId });
    if (result) return result;
    return status.INTERNAL_ERR;
}

module.exports = {
    editCustomer,
    getCustomers,
    getCustomerById,
    deleteCustomer
};