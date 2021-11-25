const machineGeneratedDataRepository = require("../repositories/machineGeneratedDataRepository");
const { status } = require("../lib/constansts");
const axios = require('axios');
const logger = require('../service/Logger');

const getData = async function() {
    try {
    const { data: result} = await axios({
        method: 'GET', 
        url: 'http://ceab-64-136-246-202.ngrok.io/', 
    });
    return result;
    } catch(err) {
        logger.error("Proxy Error", {
            source: "/controllers/machineGeneratedDataController.getData",
            error : err.message
        })
        return [{}];
    } 
}

const addMachineGeneratedData = async function(){
    const data = await getData();
    const result = await machineGeneratedDataRepository.save(data);
    if (result) return status.SUCCESS;
    return status.REGISTER_FAIL;
}

const getMachineGeneratedData = async function(req) {
    const result = await machineGeneratedDataRepository.getMachineGeneratedData(req.insuranceCompany, req.query.customerId);
    if (result) return result;
    return status.INTERNAL_ERR;
}

module.exports = {
    addMachineGeneratedData,
    getMachineGeneratedData
};