import mongoose from 'mongoose';
// Schema for users

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

export default mongoose.model('Post', postSchema);
