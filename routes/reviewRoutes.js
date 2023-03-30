import { Router } from 'express'
import {  getReviewById} from '../controllers/user.controller.js'
const reviewRouter = Router()
reviewRouter.get('/api/reviews/:id', getReviewById)
export { reviewRouter }

