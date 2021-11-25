const deviceModel = require("../models/device");
const logger = require('../service/Logger');
const mongoose = require('mongoose');


const editDevice = async function(device = {}) {
    try {
        device.timestamp = new Date();
        var query = { _id: device._id}
        if (!query._id) {
                query._id = new mongoose.mongo.ObjectID();
        }
        await deviceModel.findOneAndUpdate(query, device,  {upsert: true});
        return true;
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/deviceRepository.editDevice",
            params: device,
            error : err.message
        })
        throw err;
    }
}

const getDevices = function(insuranceCompany) {
    try {
        return deviceModel.find({ insuranceCompanyId : insuranceCompany.id});
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/deviceRepository.getDevices",
            params: opts,
            error : err.message
        })
        throw err;
    }
}

const deleteDevice = function(opts) {
    try {
        return deviceModel.deleteOne({ insuranceCompanyId : opts.insuranceCompanyId, _id: opts.deviceId});
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/deviceRepository.deleteDevice",
            params: opts,
            error : err.message
        })
        throw err;
    }
}

module.exports = {
    editDevice,
    getDevices,
    deleteDevice,
}