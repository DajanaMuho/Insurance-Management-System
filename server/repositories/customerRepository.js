const customerDetailsModel = require("../models/customerDetails");
const logger = require('../service/Logger');
const mongoose = require('mongoose');

const editCustomer = async function(customer = {}) {
    try {
        customer.timestamp = new Date();
        var query = { _id: customer._id}
        if (!query._id) {
                query._id = new mongoose.mongo.ObjectID();
        }
        await customerDetailsModel.findOneAndUpdate(query, customer,  {upsert: true});
        return true;
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/customerRespository.editCustomer",
            params: customer,
            error : err.message
        })
        throw err;
    }
}

const getCustomers = function(insuranceCompany) {
    try {
        return customerDetailsModel.find({ insuranceCompanyId : insuranceCompany.id});
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/customerRespository.getCustomers",
            params: opts,
            error : err.message
        })
        throw err;
    }
}

const getCustomerById = function(opts) {
    try {
        return customerDetailsModel.findOne({ insuranceCompanyId : opts.insuranceCompanyId, _id: opts.customerId});
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/customerRespository.getCustomerById",
            params: opts,
            error : err.message
        })
        throw err;
    }
}

const deleteCustomer = function(opts) {
    try {
        return customerDetailsModel.deleteOne({ insuranceCompanyId : opts.insuranceCompanyId, _id: opts.customerId});
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/customerRespository.deleteCustomer",
            params: opts,
            error : err.message
        })
        throw err;
    }
}

module.exports = {
    editCustomer,
    getCustomers,
    getCustomerById,
    deleteCustomer
}