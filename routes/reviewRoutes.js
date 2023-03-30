import { Router } from 'express'
import {  getReviewById, addReview} from '../controllers/user.controller.js'
const reviewRouter = Router()
reviewRouter.get('/api/reviews/:id', getReviewById)
reviewRouter.post('/api/reviews', addReview)
export { reviewRouter }

