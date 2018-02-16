import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  age: Number,
  created_at: Date,
  updated_at: Date,
});

export default mongoose.model('User', userSchema);
