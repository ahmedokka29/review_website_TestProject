import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
    integer: true,
    min: 0,
    max: 10,
  },
})

export const review = mongoose.model('Review', ReviewSchema)