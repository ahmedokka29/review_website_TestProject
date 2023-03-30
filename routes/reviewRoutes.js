import { Router } from 'express'
<<<<<<< Updated upstream
=======
import {  getReviewById, addReview,getReviews} from '../controllers/user.controller.js'
const reviewRouter = Router()
reviewRouter.get('/api/reviews', getReviews)
reviewRouter.get('/api/reviews/:id', getReviewById)
reviewRouter.post('/api/reviews', addReview)
export { reviewRouter }
>>>>>>> Stashed changes

const reviewRouter = Router()

export { reviewRouter }
