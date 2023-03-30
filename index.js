import express from 'express'
import { reviewRouter } from './routes/reviewRoutes'

const port = process.env.PORT || 8080
const app = express()

app.use(express.json())

app.listen(port, async () => {
  console.log(`hello from port ${port}`)
})
