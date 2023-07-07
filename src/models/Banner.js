import mongoose from 'mongoose';

const { Schema } = mongoose;

const bannerSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },

    genre: {
      type: [String],
      required: true,
    },
    releaseDate: {
      type: String,
    },
    director: {
      type: String,
    },
    cast: {
      type: String,
    },
    language: {
      type: String,
    },

    imageLink: {
      type: String,
      required: true,
    },
    movieLink: {
      type: String,
      required: true,
    },
    clickCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Banner || mongoose.model('Banner', bannerSchema);
