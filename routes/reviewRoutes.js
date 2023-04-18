import { Router } from "express";
import {
  getFilmById,
  getFilmByRating,
  addFilm,
  getReviews,
  editReview,
  deleteReview,
  deleteFilm,
} from "../controllers/filmController.js";

const reviewRouter = Router();

reviewRouter.get("/api/reviews", getReviews);
reviewRouter.get("/api/films/:id", getFilmById);
reviewRouter.get('/api/films/rating/:rating', getFilmByRating);
reviewRouter.post('/api/films', addFilm);
reviewRouter.put("/api/reviews/:id", editReview);
reviewRouter.delete("/api/reviews/:id", deleteReview);
reviewRouter.delete('/api/films/:id', deleteFilm);
export { reviewRouter };
