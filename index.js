const express = require("express")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const PORT = process.env.PORT || 6000

const app = express()

// set static folder
app.use(express.static("public"))

// rate limiting
const limiter = rateLimit({
	windowMS: 10 * 60 * 1000, // in milliseconds
	max: 5,
})

// middleware to limit requests to url
app.use(limiter)
app.set("trust proxy", 1)

// routes
app.use("/api", require("./routes/index"))

// enable cors
app.use(cors())

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
