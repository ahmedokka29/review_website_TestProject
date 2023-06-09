import express from 'express'
import { filmRoutes } from './routes/filmRoutes.js'
import { userRoutes } from './routes/userRoutes.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const port = process.env.PORT
const url = process.env.DB

app.use(express.json())

app.use(filmRoutes);
app.use(userRoutes);

app.listen(port, async () => {
  await mongoose.connect(`${url}`);
  console.log(`Hello from port ${port}\nMongoose Connected`);
});
