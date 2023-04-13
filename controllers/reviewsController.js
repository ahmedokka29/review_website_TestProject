import { review } from "../models/reviews.js";
import { validateReview } from "../helpers/validation";

export const getReviews = async (req, res) => {
  try {
    const foundReviews = await review.find({})
    if (foundReviews.length <= 0) {
      res.send("there's no reviews")
    } else {
      res.send(foundReviews)
    }
  } catch (error) {
    console.log(error)
  }
}
export const getReviewById = async (req, res) => {
  const reviewId = req.params.id
  try {
    const foundReview = await review.findById(reviewId)
    if (!foundReview) {
      res.send("there's no review by this id")
    } else {
      res.status(200).send(foundReview)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getReviewByRating = (req, res) => {
  const rating = req.params.rating
  const review = reviews.filter((f) => f.rating == rating)
  if (!review) {
    res.send("there's no review by this rating")
  }
  res.status(200).send(review)
}

export const addReview = (req, res) => {
  const review = req.body;
  const validateRusult = validateReview(review);
  if (validateRusult.error) {
    res.status(400).send(validateRusult.error.details[0].message);
  }
  const addedReview = {
    id: reviews.length + 1,
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating,
  };
  reviews.push(addedReview);
  res.status(201).send(addedReview);
};
export const editReview = (req, res) => {
  const review = reviews.find((c) => c.id === parseInt(req.params.id));
  const validateRusult = validateReview(req.body);
  if (validateRusult.error) {
    res.status(400).send(validateRusult.error.details[0].message);
  }
  review.title = req.body.title;
  review.description = req.body.description;
  review.rating = req.body.rating;
  res.status(200).send(review);
};

export const deleteReview = (req, res) => {
  const review = reviews.find((c) => c.id === parseInt(req.params.id));
  if (!review) {
    res.send("there's no review by this ID");
  }
  const index = reviews.indexOf(review);
  reviews.splice(index, 1);
  res.status(200).send(review);
};
