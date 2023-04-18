import mongoose from 'mongoose';

const FilmSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: [String],
    description: String,
    rating: {
      type: Number,
      integer: true,
      min: 0,
      max: 10,
    },
    reviews: [
      {
        title: String,
        description: String,
        rating: {
          type: Number,
          integer: true,
          min: 0,
          max: 10,
        },
      },
    ],
  },
  { collection: 'film' }
);

export const film = mongoose.model('Film', FilmSchema);
