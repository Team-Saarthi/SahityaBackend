const mongoose = require("mongoose");

const adminSettingSchema = new mongoose.Schema({
    setting_id: { type: Number, required: true, unique: true },
    setting_name: { type: String, required: true },
    setting_value: { type: Number, required: true },
    description: { type: String, required: true },
});

const AdminSetting = mongoose.model("AdminSetting", adminSettingSchema);
module.exports = AdminSetting;
