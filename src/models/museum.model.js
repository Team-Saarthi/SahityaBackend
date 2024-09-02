import mongoose from "mongoose";

const museumSchema = new mongoose.Schema({
    museum_id: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    name: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    timing: {
        type: [{ type: String }],
        required: true,
    },
    ticket_price: {
        type: Object,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    contact_details: {
        type: String,
        required: true,
    },
    information: {
        type: Object,
        required: false,
    },
    working_days: {
        type: String,
        required: true,
    },
});

const Museum = mongoose.model("Museum", museumSchema);
module.exports = Museum;
