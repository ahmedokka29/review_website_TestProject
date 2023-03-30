import { Router } from "express";
import {
  getReviewById,
  addReview,
  getReviews,
  editReview,
  deleteReview,
} from "../controllers/reviews.controller.js";

const reviewRouter = Router();

reviewRouter.get("/api/reviews", getReviews);
reviewRouter.get("/api/reviews/:id", getReviewById);
reviewRouter.post("/api/reviews", addReview);
reviewRouter.put("/api/reviews/:id", editReview);
reviewRouter.delete("/api/reviews/:id", deleteReview);

export { reviewRouter };
