const mongoose = require('mongoose');

const CustomerDetailsSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        addressEmail: String,
        phoneNumber: String,
        age: Number,
        gender: String,
        martialStatus: String,
        insuranceCompanyId: String,
        timestamp: Date,
    }
)

const CustomerDetails = mongoose.model('customerDetails', CustomerDetailsSchema);

module.exports = CustomerDetails;