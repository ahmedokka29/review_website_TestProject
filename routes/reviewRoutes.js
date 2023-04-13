import { Router } from "express";
import {
  getReviewById,
  getReviewByRating,
  addReview,
  getReviews,
  editReview,
  deleteReview,
} from "../controllers/reviewsController.js";

const reviewRouter = Router();

reviewRouter.get("/api/reviews", getReviews);
reviewRouter.get("/api/reviews/:id", getReviewById);
reviewRouter.get('/api/reviews/rating/:rating', getReviewByRating);
reviewRouter.post("/api/reviews", addReview);
reviewRouter.put("/api/reviews/:id", editReview);
reviewRouter.delete("/api/reviews/:id", deleteReview);

export { reviewRouter };
