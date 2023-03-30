import Joi from 'joi'

export const validateReview = (review) => {
  const schema = Joi.object({
    id: Joi.number().integer().min(1),
    title: Joi.string(),
    description: Joi.string(),
    rating: Joi.number().integer().min(1).max(10),
  })

  return schema.validate(review)
}
