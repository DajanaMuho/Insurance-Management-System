const machineGeneratedDataModel = require("../models/machineGeneratedData");
const deviceModel = require('../models/device');
const logger = require('../service/Logger');

const save = function(machineGeneratedData = {}) {
    try {
        machineGeneratedData.timestamp = new Date();
        return machineGeneratedDataModel.create(machineGeneratedData);
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/machineGeneratedDataRespository.save",
            params: machineGeneratedData,
            error : err.message
        })
        throw err;
    }
}

const getMachineGeneratedData = async function(insuranceCompany, customerId) {
    try {
        const devices = await deviceModel.find({insuranceCompanyId: insuranceCompany.id, customerId});
        const promisedResult = [];
        devices.forEach(device => {
            promisedResult.push(machineGeneratedDataModel.find({licensePlate: device.licensePlate}).read('sp').lean().exec());
        });
        const result = await Promise.all(promisedResult);
        return result[0]; 
    } catch(err){
        logger.error("MongoDB Query Error", {
            source: "/repositories/machineGeneratedDataRespository.getMachineGeneratedData",
            error : err.message
        })
        throw err;
    }
}

module.exports = {
    save,
    getMachineGeneratedData,
}