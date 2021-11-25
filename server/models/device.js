const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema(
    {
        carAge: String,
        licensePlate: String,
        customerId: String,
        insuranceCompanyId: String,
        timestamp: Date,
    }
)

const Device = mongoose.model('devices', DeviceSchema);

module.exports = Device;