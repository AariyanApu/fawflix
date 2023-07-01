import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    cast: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },

    imageLink: {
      type: String,
      required: true,
    },
    movieLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Post || mongoose.model('Post', postSchema);

// export default mongoose.model('Post', postSchema);
