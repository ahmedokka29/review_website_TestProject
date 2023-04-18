import { review } from "../models/film.js";

export const getReviews = async (req, res) => {
  const filmTitle = req.params.title;
  try {
    const foundReviews = await film
      .findOne({ title: filmTitle })
      .distinct('reviews');
    if (foundReviews.length <= 0) {
      res.send("there's no reviews");
    } else {
      res.send(foundReviews);
    }
  } catch (error) {
    console.log(error);
  }
};
export const getReviewById = async (req, res) => {
  const reviewId = req.params.id;
  try {
    const foundReview = await review.findById(reviewId);
    if (!foundReview) {
      res.send("there's no review by this id");
    } else {
      res.status(200).send(foundReview);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReviewByRating = async (req, res) => {
  const reviewRating = req.params.rating
  try {
    const foundReview = await review.find({ rating: reviewRating })
    if (foundReview.length <= 0) {
      res.send("there's no review by this rating")
    } else {
      res.status(200).send(foundReview)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const addReview = async (req, res) => {
  const reviewData = new review({
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating,
  })
  try {
    const dataToSave = await reviewData.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const editReview = async (req, res) => {
  const reviewId = req.params.id
  const { title, description, rating } = req.body
  try {
    const foundReview = await review.findById(reviewId)
    if (!foundReview) {
      res.send("there's no review by this id")
    } else {
      foundReview.title = title
      foundReview.description = description
      foundReview.rating = rating
      await foundReview.save()
      res.status(200).send(foundReview)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteReview = async (req, res, next) => {
  const reviewId = req.params.id;
  try {
    const foundReview = await review.findById(reviewId);
    await review.deleteOne({ _id: reviewId });
    if (!foundReview) {
      res.send("there's no review by this id");
    } else {
      res.status(200).send("Review is deleted");
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};