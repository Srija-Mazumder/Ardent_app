import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import path from 'path';
import shortid from 'shortid';
import Razorpay from 'razorpay';

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(cors({ origin: 'http://localhost:3000' }));

// Initialize Razorpay
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID, // Replace with your Razorpay key_id
//   key_secret: process.env.RAZORPAY_KEY_SECRET // Replace with your Razorpay key_secret
// });

// app.post('/razorpay',async(req,res) => {

//   const payment_capture = 1
//   const amount = 499
//   const currency = "INR"

//   const options = {
//     amount:amount*100,
//     currency: currency,
//     receipt: shortid.generate(),
//     payment_capture
//   }

//   try{
//   const response = await razorpay.orders.create(options)
//   console.log(response)
//   res.json({
//     id:response.id,
//     currency:response.currency,
//     amount:response.amount
//   })
//   }catch(error){
//     console.log(error)
//   }
// })


// Routes
app.use('/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MongoDBURL )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

