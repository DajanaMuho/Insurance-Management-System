const mongoose = require('mongoose');

// TODO: Add validation
const InsuranceCompanySchema = new mongoose.Schema(
    {
        name: String,
        addressEmail: String,
        location: String,
        licenseNumber: String,
        password: String,
        timestamp: Date,
    }
)

const InsuranceCompany = mongoose.model('insuranceCompany', InsuranceCompanySchema);

module.exports = InsuranceCompany;