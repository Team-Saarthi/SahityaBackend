const mongoose = require("mongoose");

const exhibitionSchema = new mongoose.Schema({
    exhibition_id: { type: Number, required: true, unique: true, index: true },
    museum_id: { type: Schema.Types.ObjectId, ref: "Museum", required: true },
    name: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    description: { type: String, required: true },
    ticket_price: { type: Number, required: true },
    timings: { type: String, required: true },
});

const Exhibition = mongoose.model("Exhibition", exhibitionSchema);
module.exports = Exhibition;
