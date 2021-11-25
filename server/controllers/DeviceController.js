const deviceRepository = require("../repositories/deviceRepository");
const { status } = require("../lib/constansts");


const editDevice = async function(req) {
    req.body.insuranceCompanyId = req.insuranceCompany.id;
    const result = await deviceRepository.editDevice(req.body);
    if (result) return status.SUCCESS;
    return status.REGISTER_DEVICE_FAIL;
}

const getDevices = async function(req) {
    const result = await deviceRepository.getDevices(req.insuranceCompany);
    if (result) return result;
    return status.INTERNAL_ERR;
}

const deleteDevice = async function(req) {
    const result = await deviceRepository.deleteDevice({insuranceCompanyId: req.insuranceCompany.id, deviceId: req.query.deviceId });
    if (result) return result;
    return status.INTERNAL_ERR;
}

module.exports = {
    editDevice,
    getDevices,
    deleteDevice
};