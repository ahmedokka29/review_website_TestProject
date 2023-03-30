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
  export const addReview = (req, res) => {
    const review = req.body
    const validateRusult = validateReview(review)
    if (validateRusult.error) {
      res.status(400).send(validateRusult.error.details[0].message)
    }
    const addedReview = {
      id: reviews.length + 1,
      title: req.body.title,
      description: req.body.description,
      rating: req.body.rating,
    }
  
    reviews.push(addedReview)
    res.status(201).send(addedReview)
  }