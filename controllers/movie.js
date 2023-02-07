//import { Movie } from "../models/movie"

export const getAllMovies = async (req, res) => {
  try {
    //const movies = await Movie.find()
    res.status(200).json({ movies: [] })
  } catch (error) {
    res.status(500).json({ error })
  }
}
