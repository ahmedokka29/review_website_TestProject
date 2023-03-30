import { reviews } from '../models/reviews.js'
import { validateReview } from '../helpers/validation'
export const getReviews = (req, res) => {
    const Reviews = reviews
    if (!reviews) {
      res.send("there's no reviews")
    }
    res.status(200).send(Reviews)
  }
  export const getReviewById = (req, res) => {
    const id = req.params.id
    const review = reviews.filter((f) => f.id == id)
    if (!review) {
      res.send("there's no review by this ID")
    }
    res.status(200).send(review)
  }