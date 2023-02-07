import { verify } from "jsonwebtoken"

// Function to check if the user is authenticated
const auth = (req, res, next) => {
  try {
    // Get the token from the header
    const bearerHeader = req.headers.authorization
    if (!bearerHeader)
      return res.status(401).send({ error: "No token provided" })

    // Extract the token from the header
    const bearerToken = bearerHeader.split(" ")[1]
    if (!bearerToken)
      return res.status(401).send({ error: "No token provided" })

    // Verify the token
    const decoded = verify(bearerToken, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(400).send({ error: "Invalid token" })
  }
}

export default auth
