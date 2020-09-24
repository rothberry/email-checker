// Dependencies
// =============================================================
const express = require("express")
const path = require("path")
const emailChecker = require("./emailChecker")

const app = express()
const PORT = process.env.PORT || 3001

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
// =============================================================
app.get("/", (req, res) => {
  res.send("hi")
})

app.post("/check", (req, res) => {
  // Create array of only emails
  const emails = req.body.map((data) => data.email)
  // console.log(emails)
  const uniqEmails = emailChecker(emails)
  res.json(uniqEmails)
})

// Listener
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`)
})
