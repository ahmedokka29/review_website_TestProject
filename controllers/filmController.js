import { film } from "../models/film.js";

export const getFilms = async (req, res) => {
  try {
    const foundFilms = await film.find({});
    if (foundFilms.length <= 0) {
      res.send("there's no films");
    } else {
      res.send(foundFilms);
    }
  } catch (error) {
    console.log(error);
  }
};
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
export const getFilmById = async (req, res) => {
  const filmId = req.params.id;
  try {
    const foundFilm = await film.findById(filmId);
    if (!foundFilm) {
      res.send("there's no review by this id");
    } else {
      res.status(200).send(foundFilm);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getFilmByRating = async (req, res) => {
  const filmRating = req.params.rating;
  try {
    const foundFilm = await film.find({ rating: filmRating });
    if (foundFilm.length <= 0) {
      res.send("there's no review by this rating");
    } else {
      res.status(200).send(foundFilm);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addFilm = async (req, res) => {
  const filmData = new film(req.body);
  try {
    const dataToSave = await filmData.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const editFilm = async (req, res) => {
  const filmId = req.params.id;
  try {
    const foundFilm = await film.findByIdAndUpdate(filmId, req.body, {
      new: true,
    });
    if (!foundFilm) {
      res.send("there's no review by this id");
    } else {
      await foundFilm.save();
      res.status(200).send(foundFilm);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteReview = async (req, res, next) => {
  const reviewTitle = req.params.title;
  const reviewId = req.params.id;

  try {
    const foundReview = await film.find({
      reviews: { $elemMatch: { _id: reviewId } },
    });

    if (!foundReview) {
      res.send("there's no review by this id");
    } else {
      const newReview = await film.findOneAndUpdate(
        { title: reviewTitle },
        {
          $pull: {
            reviews: {
              _id: reviewId,
            },
          },
        },
        { new: true }
      );
      await newReview.save();
      res.status(200).send(newReview);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export const deleteFilm = async (req, res, next) => {
  const filmId = req.params.id;
  try {
    const foundFilm = await film.findById(filmId);
    if (!foundFilm) {
      res.send("there's no film by this id");
    } else {
      await film.deleteOne({ _id: filmId });
      res.status(200).send('Film is deleted');
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};