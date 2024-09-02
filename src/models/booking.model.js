const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    booking_id: { type: Number, required: true, unique: true, index: true },
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    museum_id: { type: Schema.Types.ObjectId, ref: "Museum", required: true },
    exhibition_id: {
        type: Schema.Types.ObjectId,
        ref: "Exhibition",
        required: true,
    },
    date_of_visit: { type: Date, required: true },
    number_of_tickets: { type: Number, required: true },
    booking_time: { type: String, required: true },
    total_cost: { type: Number, required: true },
    status: { type: String, required: true },
    payment_status: { type: String, required: true },
    payment_reference_id: { type: Number, required: false },
    payment_date: { type: Date, required: false },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
