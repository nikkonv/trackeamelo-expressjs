import express from "express"
const app = express()

// import routes
import movieRoutes from "./routes/movie.js"
//import tvshowRoutes from "./routes/tvshow"

// parse incoming request bodies in JSON format
app.use(express.json())

// middleware for authentication
//app.use(authMiddleware)

// routes for movies
app.use("/movies", movieRoutes)

// routes for TV shows
//app.use("/tvshows", tvshowRoutes)

// error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: err.message,
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
