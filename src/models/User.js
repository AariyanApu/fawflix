import mongoose from 'mongoose';

const { Schema } = mongoose;

// Check if the User model has already been defined
const User = mongoose.models.User
  ? mongoose.model('User')
  : mongoose.model(
      'User',
      new Schema({
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        },
      }),
    );

export default User;
