import { Router } from "express";
import {
  getFilmById,
  getFilmByRating,
  addReview,
  getReviews,
  editReview,
  deleteReview,

} from "../controllers/filmController.js";

const reviewRouter = Router();

reviewRouter.get("/api/reviews", getReviews);
reviewRouter.get("/api/films/:id", getFilmById);
reviewRouter.get('/api/films/rating/:rating', getFilmByRating);
reviewRouter.post("/api/reviews", addReview);
reviewRouter.put("/api/reviews/:id", editReview);
reviewRouter.delete("/api/reviews/:id", deleteReview);

export { reviewRouter };
