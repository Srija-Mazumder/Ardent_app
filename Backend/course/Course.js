import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  // other fields
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
