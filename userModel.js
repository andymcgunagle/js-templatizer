import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model('user', UserSchema);
export default User;