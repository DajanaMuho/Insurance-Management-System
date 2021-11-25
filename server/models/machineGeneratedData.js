const mongoose = require('mongoose');

const machineGeneratedDataSchema = new mongoose.Schema(
    {
        "licensePlate": String,
        "Left_turn_intensity08": Number,
        "Left_turn_intensity09": Number,
        "Left_turn_intensity10": Number,
        "Left_turn_intensity11": Number,
        "Left_turn_intensity12": Number,
        "Pct_drive_mon": Number,
        "Pct_drive_tue": Number,
        "Pct_drive_wed": Number,
        "Pct_drive_thr": Number,
        "Pct_drive_fri": Number,
        "Pct_drive_sat": Number,
        "Pct_drive_sun": Number,
        "Right_turn_intensity08": Number,
        "Right_turn_intensity09": Number,
        "Right_turn_intensity10": Number,
        "Right_turn_intensity11": Number,
        "Right_turn_intensity12": Number,
        "Accel_06miles": Number,
        "Accel_08miles": Number,
        "Accel_09miles": Number,
        "Accel_11miles": Number,
        "Accel_12miles": Number,
        "Accel_14miles": Number,
        "Brake_06miles": Number,
        "Brake_08miles": Number,
        "Brake_09miles": Number,
        "Brake_11miles": Number,
        "Brake_12miles": Number,
        "Brake_14miles": Number,
        "predictedClaimValue": Boolean,
        "predictedClaimAmount": Number,
        timestamp: Date,
    }
)

const Device = mongoose.model('machineGeneratedData', machineGeneratedDataSchema);

module.exports = Device;