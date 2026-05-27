const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: { type: String, required: true, trim: true },
    image: { type: String, trim: true, default: '' },
    imageAlt: { type: String, trim: true, default: '' },
    imageCaption: { type: String, trim: true, default: '' },
    content: {
      type: [String],
      required: true,
      validate: {
        validator: (value) => value.length > 0 && value.every(Boolean),
        message: 'At least one article paragraph is required',
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Article', articleSchema);
