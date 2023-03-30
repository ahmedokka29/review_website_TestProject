import { reviews } from '../models/reviews.js'
import { validateReview } from '../helpers/validation'
export const getReviews = (req, res) => {
    const Reviews = reviews
    if (!reviews) {
      res.send("there's no reviews")
    }
    res.status(200).send(Reviews)
  }