import express from 'express';
import User from '../models/User.js';
import Course from '../models/Course.js';

const router = express.Router();

router.post('/purchase', async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    // Find the user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check if the course exists
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    // Add the course to the user's purchased courses if not already present
    if (!user.purchasedCourses.includes(courseId)) {
      user.purchasedCourses.push(courseId);
      await user.save();
    }

    res.status(200).json({ message: 'Course purchased successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
