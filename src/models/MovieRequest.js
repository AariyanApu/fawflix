import mongoose from 'mongoose';

const { Schema } = mongoose;

const movieRequestSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.MovieRequest ||
  mongoose.model('MovieRequest', movieRequestSchema);
