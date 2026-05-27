const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: { type: String, required: true },
    contactNumber: { type: String, trim: true, default: '' },
    age: { type: Number, default: null },
    gender: { type: String, enum: ['Male', 'Female', 'Other', ''], default: '' },
    type: {
      type: String,
      enum: ['Admin', 'Editor', 'Manager', 'Viewer'],
      default: 'Viewer',
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
