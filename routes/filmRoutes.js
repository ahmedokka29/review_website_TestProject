import { Router } from 'express';
import {
  addFilm,
  deleteFilm,
  deleteReview,
  editFilm,
  getFilmById,
  getFilmByRating,
  getFilms,
  getReviews,
} from '../controllers/filmController.js';

const filmRoutes = Router();

filmRoutes.get('/api/:title/reviews', getReviews);
filmRoutes.delete('/api/:title/reviews/:id', deleteReview);

filmRoutes.get('/api/films', getFilms);
filmRoutes.get('/api/films/:id', getFilmById);
filmRoutes.get('/api/films/rating/:rating', getFilmByRating);
filmRoutes.post('/api/films', addFilm);
filmRoutes.put('/api/films/:id', editFilm);
filmRoutes.delete('/api/films/:id', deleteFilm);

export { filmRoutes };
