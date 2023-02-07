import express from "express"
const router = express.Router()
import { getAllMovies } from "../controllers/movie.js"

// Get all movies
router.get("/", getAllMovies)

export default router
