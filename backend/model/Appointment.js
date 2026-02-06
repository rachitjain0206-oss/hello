const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    slotStartIso: { type: String, required: true },
    SlotEndIso: {
      type: String,
      required: true,
    },
    consultaionType: {
      type: String,
      enum: ["Video Consultation", "Voice Call"],
      default: "Video Consultation",
    },
    status: {
      type: String,
      enum: ["Scheduled", "Completed", "Cancelled", "In Progress"],
      default: "Scheduled",
    },
    symptons: { type: String, default: "" },
    zegoRoomod: { type: String, default: "" },
    prescriptions: { type: String, default: "" },
    notes: { type: String, default: "" },

    consultaionFees: { type: Number, required: true },
    platformFees: { type: Number, required: true },
    totalAmount: { type: String, required: true },
    playmentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Refund"],
      default: "Pending",
    },
    payoutStatus: {
      type: String,
      enum: ["Pending", "Paid", "Cancelled"],
      default: "Pending",
    },
    payoutDate: { type: Date },
    paymentMethod: { type: String, default: "Online" },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String },
    paymentDate: { type: Date },
  },
  { timestamps: true },
);

appointmentSchema.index(
  { doctorId: 1, date: 1, slotStartIso: 1 },
  { unique: true },
);

module.exports = mongoose.model("Appointment", appointmentSchema);
